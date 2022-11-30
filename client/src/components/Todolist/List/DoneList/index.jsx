import React, { useState } from 'react'
import EraseButton from '../EraseButton'
import "./DoneList.css"
import { UseStateContext } from '../../../../context/ContextProvider'
import { useEffect } from 'react'
import Axios from 'axios'


const DoneList = () => {

    const { login, doneList, setDoneList }= UseStateContext()
    const [concluded, setConcluded] = useState(0)

    useEffect(()=>{
        Axios.post("https://cooper-mysql.herokuapp.com/toDoList/get")
            .then((resp)=>{
                setDoneList(resp.data.result)
        })
    },[])

    useEffect(()=>{
        setConcluded(0)
        doneList?.map((i)=>{
            i.concluded ===  1 ? setConcluded((old)=>old+=1) : setConcluded((old)=>old)
            return undefined
        })
    },[doneList])


    const handleDeleteTask = (idtoDoList)=>{
        Axios.post("https://cooper-mysql.herokuapp.com/toDoList/delete",{
            idTask: idtoDoList
        })
            .then((resp)=>{
                if(resp.data.returnCode === 1){
                    Axios.post("https://cooper-mysql.herokuapp.com/toDoList/get")
                    .then((resp)=>{
                        setDoneList(resp.data.result)
                    })
                }
            })
    }
    const handleDeleteAll = () =>{
        Axios.post("https://cooper-mysql.herokuapp.com/doneList/delete-all")
        .then((resp)=>{
            console.log(resp)
            if(resp.data.returnCode === 1){
                    Axios.post("https://cooper-mysql.herokuapp.com/toDoList/get")
                    .then((resp)=>{
                        setDoneList(resp.data.result)
                    })
                }
        })
    }
    return (
    <div className='list doneList'>
        <div className='title-textContainer'>
            <h1 className='list-title'>Done</h1>
            {login?
                <>
                    {concluded   === 0 ?
                        <>
                            <p className='paragraph-text done-paragraph-text'>You have no completed tasks</p>
                        </>
                        :
                        <div className='paragraph-container'>
                            <p className='paragraph-text done-paragraph-text'>Congratulions!</p>
                            <p className='paragraph-text'>You have done {concluded} task</p>
                        </div>
                    }
                </>
            :
                <>
                    <p className='paragraph-text'>Login to access your list</p>
                </>
            }
        </div>
        {login?
            <div className='list-checkbox'>
                {doneList?.map((i,index)=>(
                    i.concluded === 1 ?
                        <div key={index} className="container">
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} className='done-checkbox-container'>
                                <input readOnly checked={true} type="checkbox"/>
                                <span className="done-checkmark"></span>
                                <p className='task-text'>{i.task}</p>
                                <button onClick={()=>{
                                    handleDeleteTask(i.idtoDoList)
                                }} style={{color:'#999999', cursor: 'pointer'}}>delete</button>
                            </div>
                        </div> : undefined
                    
                ))}
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

export default DoneList