import { Box,Typography,styled } from '@mui/material'
import React from 'react'
import { useAccount } from '../../context/AccountProvider';
import { UserConversation } from '../../services/api';

const Component = styled(Box)`
    height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`;
    
const Image = styled('img') ({
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
});
const Conversation = ({user}) => {
    const{setPerson,account}=useAccount()
    console.log(account.sub,user.sub)   
    const getUser=async()=>{
        setPerson(user)
        await UserConversation({senderId:account.sub,recieverId:user.sub})

    }
    
  return (
    <>
    <Component onClick={getUser}>
        <Box>
           <Image src ={user.picture} />
        </Box>
        <Box style={{width: '100%'}}>
            <Box>
                <Typography>{user.name}</Typography>
            </Box>
        </Box>
    </Component>
    </>
  )
}

export default Conversation