import { GlobalStateContext } from "./globalStateContext"
import { useState } from "react"
import React from 'react';

const GlobalState = (props) => {
    
    const [ user, setUser ] = useState(undefined)

    
    return (

        <GlobalStateContext.Provider value={
            {
                user, setUser
            }
        }>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState