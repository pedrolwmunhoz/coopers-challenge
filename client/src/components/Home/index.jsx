import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className='homeContainer'>
        <div className='text-buttonContainer'>
          <h1 className='organize-text'>Organize</h1>
          <h2 className='yourJobs-text'>your daily jobs</h2>
          <p className='theOnlyWay-text'>The only way to get things done</p>
          <button className='button-TodoList'>Go to To-do-List</button>
        </div>
        <div className='imageContainer'>
          <div className='image-icon'>
            <svg width={window.screen.width < 800 ? "170px" : window.screen.width <1000 ? "434" : "634"} height={window.screen.width < 800 ? "200" : "734" } viewBox="0 0 634 734" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M633.073 0.421339L2.95858 276.703C1.16119 277.491 0 279.268 0 281.232V452.769C0 454.732 1.16119 456.51 2.95858 457.298L633.073 733.579C636.339 735.011 640 732.617 640 729.049V561.917C640 559.954 638.839 558.176 637.041 557.388L213.152 371.529C209.207 369.799 209.207 364.2 213.152 362.471L637.041 176.612C638.839 175.824 640 174.047 640 172.083V4.95045C640 1.38287 636.339 -1.0106 633.073 0.421339" fill="black"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M633.073 0.421339L2.95858 276.703C1.16119 277.491 0 279.268 0 281.232V452.769C0 454.732 1.16119 456.51 2.95858 457.298L633.073 733.579C636.339 735.011 640 732.617 640 729.049V561.917C640 559.954 638.839 558.176 637.041 557.388L213.152 371.529C209.207 369.799 209.207 364.2 213.152 362.471L637.041 176.612C638.839 175.824 640 174.047 640 172.083V4.95045C640 1.38287 636.339 -1.0106 633.073 0.421339" fill="#4AC959"/>
            </svg>
            <img className="imageHome" alt="img" src = {require(`../../data/image.png`)}/>
          </div>

        </div>
    </div>
  )
}

export default Home