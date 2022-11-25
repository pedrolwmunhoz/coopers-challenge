import React, { useEffect, useState } from 'react'
import "./GoodThings.css"
import GoodThingsCard from './GoodThingsCard'

const goodThingsText = ["Organize your daily job enhance your life performance", "Mark one activity as done makes your brain understands the power of doing.",
                "Careful with missunderstanding the difference between a list of things and a list of desires.", "Work important, to life and mind" ]



const GoodThings = (text) => {

  const [indexCard, setIndexCard] = useState([0,1,2])
  const [paginationValue, setPaginationValue] = useState([true,false,false])


  const goToPrevious = ()=>{
    if(window.screen.width<800){
      if(indexCard[0] === 0){
        setIndexCard([goodThingsText.length-1, 0])
      }
      else if(indexCard[1] ===0){
        setIndexCard(oldArray=>[oldArray[0]-1, goodThingsText.length -1])
      }
      else{
        setIndexCard(oldArray => [oldArray[0]-1, oldArray[1]-1])
      }
    }
    else{
      if(indexCard[0] === 0){
        setIndexCard([goodThingsText.length-1, 0, 1])
      }
      else if(indexCard[1] ===0){
        setIndexCard(oldArray=>[oldArray[0]-1, goodThingsText.length -1, 0])
      }
      else if(indexCard[2] ===0){
        setIndexCard(oldArray=>[oldArray[0]-1, oldArray[1]-1, goodThingsText.length-1])
      }
      else{
        setIndexCard(oldArray => [oldArray[0]-1, oldArray[1]-1, oldArray[2]-1])
      }
    }
  }


  const goToNext = ()=>{
    if(window.screen.width<800){
      if(indexCard[0]=== goodThingsText.length-1){
        setIndexCard([0,1])
      }
      else if(indexCard[1] === goodThingsText.length-1){
        setIndexCard([goodThingsText.length-1,0,1])
      }
      else{
        setIndexCard(oldArray => [oldArray[0]+1, oldArray[1]+1])
      }
    }
    else{
      if(indexCard[0]=== goodThingsText.length-1){
        setIndexCard([0,1,2])
      }
      else if(indexCard[1] === goodThingsText.length-1){
        setIndexCard([goodThingsText.length-1,0,1])
      }
      else if(indexCard[2] === goodThingsText.length-1){
        setIndexCard([goodThingsText.length-2,goodThingsText.length-1,0])
      }
      else{
        setIndexCard(oldArray => [oldArray[0]+1, oldArray[1]+1, oldArray[2]+1])
      }
    }
  }

  return (
    <div className='goodThings-container'>
        <div className='good-bg-container'>
            <h1 className='good-title'>good things</h1>
        <div className='goodThingsCard-container'>
            <div className='goodThingsCard'>
              {window.screen.width <500 ?
                <div className='goodThings'>
                  <GoodThingsCard imgId={indexCard[0]} text={goodThingsText[indexCard[0]]}/>
                  <GoodThingsCard imgId={indexCard[1]} text={goodThingsText[indexCard[1]]}/>
                </div>
                : window.screen.width > 800 && window.screen.width < 1100 ?
                  <div className='goodThings'>
                  <GoodThingsCard imgId={indexCard[0]} text={goodThingsText[indexCard[0]]}/>
                  <GoodThingsCard imgId={indexCard[1]} text={goodThingsText[indexCard[1]]}/>
                </div> :
                <div className='goodThings'>
                  <GoodThingsCard imgId={indexCard[0]} text={goodThingsText[indexCard[0]]}/>
                  <GoodThingsCard imgId={indexCard[1]} text={goodThingsText[indexCard[1]]}/>
                  <GoodThingsCard imgId={indexCard[2]} text={goodThingsText[indexCard[2]]}/>
                </div>
                }
                <div className='pagination-input-container'>
                  <div className='pagination-input'>
                    <div className='pagination-checkbox-container'>
                        <input onClick={()=>{ 
                            setPaginationValue([true,false,false])
                            goToPrevious()
                          }}
                          checked={paginationValue[0]}
                          type="checkbox"
                          readOnly
                        />
                        <span className="pagination-checkmark"></span>
                    </div>
                    <div className='pagination-checkbox-container'>
                        <input onClick={()=>{
                            paginationValue[1] === true? setPaginationValue([false,true,false]) : paginationValue[2] === true ? goToPrevious() : goToNext()
                            setPaginationValue([false,true,false])
                          }}
                          checked={paginationValue[1]}
                          type="checkbox"
                          readOnly
                        />
                        <span className="pagination-checkmark"></span>
                    </div>
                  <div className='pagination-checkbox-container'>
                      <input onClick={()=>{
                          setPaginationValue([false,false,true])
                          goToNext()
                        }}
                        readOnly
                        checked={paginationValue[2]}
                        type="checkbox"
                      />
                      <span className="pagination-checkmark"></span>
                  </div>
                  </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default GoodThings