import React, { useState } from 'react'
import EraseButton from '../EraseButton'
import "./TodoList.css"
import { UseStateContext } from '../../../../context/ContextProvider'

const TodoList = () => {
    const { login } = UseStateContext()
    const [toDoList, setToDoList] = useState(["this is a new task", "Develop the To-do List page", "Create the drag-and-drop function",
    "Add new tasks", "Delete itens", "Erase all","Checked item goes to Done list","This item label may be edited","Editing an item..."])

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
                {toDoList.map((i,index)=>(
                    <div key={index} className="container">
                        <div className='toDo-checkbox-container'>
                            <input readOnly type="checkbox"/>
                            <span className="toDo-checkmark"></span>
                            <p className='task-text toDo-task-text'>{i}</p>
                        </div>
                    </div>
                ))}
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