import React , { createContext, useContext, useState } from 'react'

const StateContext = createContext();

export const ContextProvider = ({children}) =>{

    const [login, setLogin] = useState(false)


    return (
        <StateContext.Provider
            value={{
                login,
                setLogin
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const UseStateContext = ()=> useContext(StateContext)