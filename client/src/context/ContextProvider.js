import React , { createContext, useContext, useState, useEffect } from 'react'

const StateContext = createContext();

export const ContextProvider = ({children}) =>{

    const [login, setLogin] = useState(false)
    const [doneList, setDoneList] = useState([])
    

    useEffect(()=>{
        setLogin(window.localStorage.getItem('logged'))

    },[])


    return (
        <StateContext.Provider
            value={{
                login,
                setLogin,
                doneList,
                setDoneList
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const UseStateContext = ()=> useContext(StateContext)