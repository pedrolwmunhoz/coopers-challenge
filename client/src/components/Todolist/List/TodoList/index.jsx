import React, { useState, useEffect } from 'react'
import EraseButton from '../EraseButton'
import "./TodoList.css"
import { UseStateContext } from '../../../../context/ContextProvider'
import { MdDone } from "react-icons/md"
import Axios from 'axios'

const TodoList = () => {
    const { login } = UseStateContext()
    const [toDoList, setToDoList] = useState(["this is a new task", "Develop the To-do List page", "Create the drag-and-drop function",
    "Add new tasks", "Delete itens", "Erase all","Checked item goes to Done list","This item label may be edited","Editing an item..."])

    useEffect(()=>{
        Axios.post("https://cooper-mysql.herokuapp.com/toDoList/get")
            .then((resp)=>{
                setToDoList(resp.data.result)
            })
    },[])

    const handleNewTask = ()=>{
        const task = document.getElementById('newTask-input').value
        Axios.post("https://cooper-mysql.herokuapp.com/toDoList/post",{
            task: task
        })
            .then((resp)=>{
                if(resp.data.returnCode === 1){
                    Axios.post("https://cooper-mysql.herokuapp.com/toDoList/get")
                    .then((resp)=>{
                        setToDoList(resp.data.result)
                    })
                }
            })
        document.getElementById('newTask-input').value = ''
    }

    const handleDeleteTask = (idtoDoList)=>{
        if(toDoList.length > 1){
            Axios.post("https://cooper-mysql.herokuapp.com/toDoList/delete",{
                idTask: idtoDoList
            })
                .then((resp)=>{
                    console.log(resp)
                    if(resp.data.returnCode === 1){
                        Axios.post("https://cooper-mysql.herokuapp.com/toDoList/get")
                        .then((resp)=>{
                            setToDoList(resp.data.result)
                        })
                    }
                })
        }
    }

  return (
    <div className='list toDoList'>
        <div className='title-textContainer'>
            <h1 className='list-title'>To-do</h1>
            { login ?
                <>
                    {toDoList.length ===0 ?
                        <>
                            <p className='paragraph-text toDo-paragraph-text'>You have no tasks</p>
                        </>
                    :
                        <div className='paragraph-container'>
                            <p className='paragraph-text toDo-paragraph-text'>Take a breath.</p>
                            <p className='paragraph-text toDo-paragraph-text'>Start doing.</p>
                        </div>
                    }
                </>
            :
                <>
                    <p className='paragraph-text'>Login to access your list</p>
                </>
            }
        </div>
        {login ?
            <div className='list-checkbox'>
                {toDoList?.map((i,index)=>(
                    <div key={index} className="container">
                        <div className='toDo-checkbox-container'>
                            <input readOnly type="checkbox"/>
                            <span className="toDo-checkmark"></span>
                            <p className='task-text toDo-task-text'>{i.task}</p>
                            <button onClick={()=>{
                                handleDeleteTask(i.idtoDoList)
                            }} style={{color:'#999999', cursor: 'pointer'}}>delete</button>
                        </div>
                    </div>
                ))}
                <div className='newTask-container'>
                    <input id='newTask-input'  className='newTask-text-input' type={'text'} placeholder='Add new task'/>
                    <MdDone size={18} onClick={()=>{handleNewTask()}} className='newTask-button' />
                </div>
            </div>
        :
            <></>
        }
        <div onClick={()=>{setToDoList([])}} className='eraseButton-container'>
            <EraseButton />
        </div>
    </div>
  )
}

export default TodoList