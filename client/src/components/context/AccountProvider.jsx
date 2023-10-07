import { createContext, useState,useContext, useRef, useEffect } from "react";
import {io} from 'socket.io-client'
const AccountContext=createContext()

const AccountProvider=({children})=>{

    const [account,setAccount]=useState()
    const [person,setPerson]=useState({})
    const [activeUsers,setActiveUsers]=useState([])

    const socket=useRef()
console.log(socket,"socekt")
    useEffect(()=>{
        socket.current=io('ws://localhost:7071')
    },[])
    return(
        <AccountContext.Provider value={{account,setAccount,person,setPerson,socket,activeUsers,setActiveUsers}}>
            {children}
        </AccountContext.Provider>
    )
}
const useAccount=()=>useContext(AccountContext)

export  {AccountProvider,useAccount}