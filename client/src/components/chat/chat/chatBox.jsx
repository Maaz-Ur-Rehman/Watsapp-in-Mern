import React, { useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import Messeges from './Messeges'
import { useAccount } from '../../context/AccountProvider'
import { GetUserConversation } from '../../services/api'

const ChatBox = () => {
  const { person } = useAccount()
  const { account } = useAccount()
  const [conversation,setConversation]=useState({})

    useEffect(() => {
      
        const  fetchConversation=async()=>{
      const res = await GetUserConversation({ senderId: account.sub, recieverId: person.sub })
          setConversation(res)
    }
      fetchConversation()
 
    }, [person.sub])
    // console.log(conversation,"conversation")
return (
  <>
    <ChatHeader person={person} />
    <Messeges person={person} conversation={conversation}/>
  </>
)
}

export default ChatBox