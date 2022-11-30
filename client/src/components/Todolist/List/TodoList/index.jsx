import React, { useState, useEffect } from 'react'
import EraseButton from '../EraseButton'
import "./TodoList.css"
import { UseStateContext } from '../../../../context/ContextProvider'
import { MdDone } from "react-icons/md"
import Axios from 'axios'

const TodoList = () => {

    const { login, setDoneList } = UseStateContext()
    const [toDoList, setToDoList] = useState([])
    const [task, setTask] = useState(0)

    useEffect(()=>{
        Axios.post("https://cooper-mysql.herokuapp.com/toDoList/get")
            .then((resp)=>{
                setToDoList(resp.data.result)
            })
    },[])

    useEffect(()=>{
        toDoList?.map((i)=>{
            i.concluded === 0 ? setTask((old)=>old+=1) : setTask((old)=>old)
            return undefined
        })
    },[toDoList])


    const handleNewTask = ()=>{
        const task = document.getElementById('newTask-input').value
        Axios.post("https://cooper-mysql.herokuapp.com/toDoList/post",{
            task: task,
            concluded: 0
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
        Axios.post("https://cooper-mysql.herokuapp.com/toDoList/delete",{
            idTask: idtoDoList
        })
            .then((resp)=>{
                if(resp.data.returnCode === 1){
                    Axios.post("https://cooper-mysql.herokuapp.com/toDoList/get")
                    .then((resp)=>{
                        setToDoList(resp.data.result)
                    })
                }
            })
    }
    const handleTaskConcluded = (idtoDoList) =>{
        Axios.post("https://cooper-mysql.herokuapp.com/toDoList/update",{
            taskId: idtoDoList,
            concluded : 1
        })
            .then((resp)=>{
                if(resp.data.returnCode === 1){
                    Axios.post("https://cooper-mysql.herokuapp.com/toDoList/get")
                    .then((resp)=>{
                        setToDoList(resp.data.result)
                        setDoneList(resp.data.result)
                    })
                }
            })
    }

    const handleDeleteAll = () =>{
        Axios.post("https://cooper-mysql.herokuapp.com/toDoList/delete-all")
        .then((resp)=>{
            if(resp.data.returnCode === 1){
                    Axios.post("https://cooper-mysql.herokuapp.com/toDoList/get")
                    .then((resp)=>{
                        setToDoList(resp.data.result)
                    })
                }
        })
    }
  return (
    <div className='list toDoList'>
        <div className='title-textContainer'>
            <h1 className='list-title'>To-do</h1>
            { login ?
                <>
                    {task === 0 ?
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
                {toDoList?.map((i,index)=>{
                    return (i.concluded === 0 ?
                        <div key={index} className="container">
                            <div className='toDo-checkbox-container'>
                                <input onClick={()=>{handleTaskConcluded(i.idtoDoList)}} readOnly type="checkbox"/>
                                <span className="toDo-checkmark"></span>
                                <p className='task-text toDo-task-text'>{i.task}</p>
                                <button onClick={()=>{
                                    handleDeleteTask(i.idtoDoList)
                                }} style={{color:'#999999', cursor: 'pointer'}}>delete</button>
                            </div>
                        </div> : undefined
                        )
                })}
                <div className='newTask-container'>
                    <input id='newTask-input'  className='newTask-text-input' type={'text'} placeholder='Add new task'/>
                    <MdDone size={18} onClick={()=>{handleNewTask()}} className='newTask-button' />
                </div>
            </div>
        :
            <></>
        }
        <div onClick={()=>{handleDeleteAll()}} className='eraseButton-container'>
            <EraseButton />
        </div>
    </div>
  )
}

export default TodoList