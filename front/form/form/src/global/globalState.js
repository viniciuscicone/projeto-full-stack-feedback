import { GlobalStateContext } from "./globalStateContext"
import { useState } from "react"
import React from 'react';

const GlobalState = (props) => {
    
    const [cart, setCart] = useState([])

    
    return (
        <GlobalStateContext.Provider value={
            {
                cart, setCart
            }
        }>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState

