import React from 'react'
import { useState } from 'react'
import EraseButton from '../EraseButton'
import "./DoneList.css"
import { UseStateContext } from '../../../../context/ContextProvider'


const DoneList = () => {
    const [doneList, setDoneList] = useState(["Get FTP credentials", "Home Page Design", "E-mail John about the deadline", "Create a Google Drive folder", "Send a gift to the client"])

    const { login }= UseStateContext()
    return (
    <div className='list doneList'>
        <div className='title-textContainer'>
            <h1 className='list-title'>Done</h1>
            {login?
                <>
                    {doneList.length === 0 ?
                        <>
                            <p className='paragraph-text done-paragraph-text'>You have no completed tasks</p>
                        </>
                        :
                        <div className='paragraph-container'>
                            <p className='paragraph-text done-paragraph-text'>Congratulions!</p>
                            <p className='paragraph-text'>You have done {doneList.length} task</p>
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
                {doneList.map((i,index)=>(
                    <div key={index} className="container">
                        <div className='done-checkbox-container'>
                            <input readOnly checked={true} type="checkbox"/>
                            <span className="done-checkmark"></span>
                            <p className='task-text'>{i}</p>
                        </div>
                    </div>
                ))}
            </div>
        :
            <></>
        }
        <div onClick={()=>{setDoneList([])}} className='eraseButton-container'>
            <EraseButton />
        </div>
    </div>
  )
}

export default DoneList