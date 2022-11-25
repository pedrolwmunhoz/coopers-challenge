import React from 'react'
import "./TodolistHeader.css"

const TodolistHeader = () => {
  return (
    <div className='to-doHeaderContainer'>
        <div className='toDoListHeader'>
          <img className="bg-toDoList" alt="img" src = {require(`../../../data/image2.png`)}/>
          <div className='toDoList-textContainer'>
            <h1 className='toDoList-Title'>To-do List</h1>
            <p className='dragAndDrop-text'>Drag and drop to set your main priorities, check when done and create what's new. </p>
          </div>
        </div>
    </div>
  )
}

export default TodolistHeader