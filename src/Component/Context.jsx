import React, {  createContext} from 'react'

const ContextProvider = React.createContext()

const Context = ({children}) => {
    return (
        <ContextProvider.Provider value={'hello'}>
            {children}
        </ContextProvider.Provider>
    )
}

export  {ContextProvider, Context}