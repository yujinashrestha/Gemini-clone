import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import  {main}  from '../config/gemini'

export const Contextapi=createContext()

function ContextProvider(props) {

    const onsent=async (prompt)=>{
      await main(prompt);
    }
   
    onsent("tell me a fun fact about space")
    const contextvalue={

    }
  return (
    <Contextapi.Provider value={{ contextvalue }}>
      {props.children}
    </Contextapi.Provider>
  )
}

export default ContextProvider