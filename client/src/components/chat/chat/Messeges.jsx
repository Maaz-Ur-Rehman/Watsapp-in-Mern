import { Box, styled } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import { useAccount } from '../../context/AccountProvider';
import { getMessege, newMessege } from '../../services/api';
import Messege from './Messege';
const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;
const Component = styled(Box)`
    height: 77.5vh;
    overflow-y: scroll;
`;
const Container = styled(Box)`
    padding: 1px 20px;
`;
const Messeges = ({ conversation }) => {
  const { account,socket ,person} = useAccount()
  const [value, setValue] = useState('')
  const [newMsgFlag,setNewMsgFlag]=useState(false)
  const [messeges, setMesseges] = useState([])
  const [icommingMesseges, setIcommingMesseges] = useState(null)

  useEffect(() => {
    const handleIncomingMessage = (data) => {
        setIcommingMesseges({
            ...data,
            createdAt: Date.now()
        });
    };

    socket.current.on('getMessege', handleIncomingMessage);

    return () => {
        // Clean up the event listener when the component unmounts
        socket.current.off('getMessege', handleIncomingMessage);
    };
}, []);


  useEffect(() => {
    const getAllmessege = async () => {
      const res = await getMessege(conversation.data._id)
      console.log(res.messeges, "ress")
      setMesseges(res.messeges)
    }
    console.log(messeges, "messegessdf")
    conversation.data && getAllmessege()
  }, [conversation.data, person.sub,newMsgFlag])

  useEffect(()=>{
    icommingMesseges && conversation?.members?.includes(icommingMesseges.senderId) &&
    setMesseges(prev=>[...prev,icommingMesseges])
  },[icommingMesseges,conversation])
  const sendText = async (e) => {
    const code = e.keyCode || e.which

    if (code === 13) {
      let messege = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation.data._id,
        type: 'text',
        text: value

      }
      socket.current.emit('sendMessege',messege)
      const res = await newMessege(messege)
      setValue('')
      setNewMsgFlag(true)
    }

  }
  return (
    <Wrapper>
      <Component>
        {messeges && messeges.map(messege => (
          <Container>
            <Messege messege={messege}
            />
          </Container>
        ))}
      </Component>
      <Footer sendText={sendText} setValue={setValue} value={value} />
    </Wrapper>
  )
}

export default Messeges