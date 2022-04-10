import React from 'react'
import { createContext,useState } from "react";

export const FirebaseContext =createContext(null)

export const Authcontext=createContext()
 
export default function Context({children})
  {
     const [user,setuser]=useState()
   return (
     (<div>
     <Authcontext.Provider value={{user,setuser}}>
      {children}
     </Authcontext.Provider>
     </div>)
   )
 }
