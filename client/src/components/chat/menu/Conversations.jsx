import { Box,styled,Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { GetUser } from '../../services/api'
import Conversation from './Conversation'
import { useAccount } from '../../context/AccountProvider';
const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;
const Conversations = ({text}) => {
    const [users,setUsers]=useState([])
    const {account,socket,activeUsers,setActiveUsers}=useAccount()
    useEffect(() => {
      const fetchData = async () => {
          let data = await GetUser();
          let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
          setUsers(fiteredData);
      }
      fetchData();
  }, [text]);
  useEffect(()=>{
    socket.current.emit('addUsers',account)
    socket.current.on('getUsers',users=>{
      setActiveUsers(users)
    })
  },[account])
  return (
    <Component>
    
          {users.map((user)=>(
             user.sub !== account.sub && 
            <Conversation user={user} />
          ))}
          <StyledDivider />
    </Component>
  )
}

export default Conversations