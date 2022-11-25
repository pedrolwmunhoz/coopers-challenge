import React from 'react'
import "./List.css"
import TodolistHeader from './TodolistHeader'
import TodoList from './List/TodoList'
import DoneList from './List/DoneList'

const Todolist = () => {
  return (
    <div className='toDoList-Container'>
      <div>
        <TodolistHeader />
      </div>
      <div className='bg-list'>
        <div className='triangulo'>
          <svg width={window.screen.width < 800 ? "70" : "137"} height={window.screen.width < 800 ? "250":"570"} viewBox="0 0 137 570" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_2380_42" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="-496" y="20" width="633" height="550">
              <path fillRule="evenodd" clipRule="evenodd" d="M136.663 20L136.663 570L-495 570L-495 20L136.663 20Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_2380_42)">
              <path fillRule="evenodd" clipRule="evenodd" d="M136.3 564.047L-101.461 22.5425C-102.139 20.9979 -103.669 20 -105.359 20L-252.979 20C-254.669 20 -256.199 20.9979 -256.877 22.5425L-494.638 564.047C-495.87 566.854 -493.81 570 -490.74 570L-346.91 570C-345.22 570 -343.69 569.002 -343.012 567.457L-183.066 203.178C-181.578 199.787 -176.759 199.787 -175.271 203.178L-15.3253 567.457C-14.6473 569.002 -13.1177 570 -11.4279 570L132.402 570C135.472 570 137.532 566.854 136.3 564.047Z" fill="black"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M136.3 564.047L-101.461 22.5425C-102.139 20.9979 -103.669 20 -105.359 20L-252.979 20C-254.669 20 -256.199 20.9979 -256.877 22.5425L-494.638 564.047C-495.87 566.854 -493.81 570 -490.74 570L-346.91 570C-345.22 570 -343.69 569.002 -343.012 567.457L-183.066 203.178C-181.578 199.787 -176.759 199.787 -175.271 203.178L-15.3253 567.457C-14.6473 569.002 -13.1177 570 -11.4279 570L132.402 570C135.472 570 137.532 566.854 136.3 564.047Z" fill="#4AC959"/>
            </g>
            <mask id="mask1_2380_42" style={{"maskType":"alpha"}} maskUnits="userSpaceOnUse" x="-536" y="0" width="633" height="550">
              <path fillRule="evenodd" clipRule="evenodd" d="M96.6625 0L96.6625 550L-535 550L-535 -2.76108e-05L96.6625 0Z" fill="white"/>
            </mask>
            <g mask="url(#mask1_2380_42)">
              <path fillRule="evenodd" clipRule="evenodd" d="M96.2999 544.047L-141.461 2.54252C-142.139 0.997891 -143.669 -1.05052e-05 -145.359 -1.05791e-05L-292.979 -1.70318e-05C-294.669 -1.71057e-05 -296.199 0.997884 -296.877 2.54251L-534.638 544.047C-535.87 546.854 -533.81 550 -530.74 550L-386.91 550C-385.22 550 -383.69 549.002 -383.012 547.457L-223.066 183.178C-221.578 179.787 -216.759 179.787 -215.271 183.178L-55.3253 547.457C-54.6473 549.002 -53.1177 550 -51.4279 550L92.4023 550C95.4724 550 97.5322 546.854 96.2999 544.047Z" fill="black"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M96.2999 544.047L-141.461 2.54252C-142.139 0.997891 -143.669 -1.05052e-05 -145.359 -1.05791e-05L-292.979 -1.70318e-05C-294.669 -1.71057e-05 -296.199 0.997884 -296.877 2.54251L-534.638 544.047C-535.87 546.854 -533.81 550 -530.74 550L-386.91 550C-385.22 550 -383.69 549.002 -383.012 547.457L-223.066 183.178C-221.578 179.787 -216.759 179.787 -215.271 183.178L-55.3253 547.457C-54.6473 549.002 -53.1177 550 -51.4279 550L92.4023 550C95.4724 550 97.5322 546.854 96.2999 544.047Z" fill="#49AF55"/>
            </g>
          </svg>
        </div>
        <div className='listContainer'>
          <div>
            <TodoList />
          </div>
          <div>
            <DoneList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todolist