import React from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, List, ListItem, Typography ,styled} from '@mui/material';
import { qrCodeImage } from '../constants/data'; 
import {GoogleLogin} from '@react-oauth/google'
import jwt_decode from "jwt-decode";
import { useAccount } from '../context/AccountProvider';
import { addUser } from '../services/api';
const DialogStyle={
    height:"96%",
    width:"60%",
    marginTop:"12%",
    maxWidth:"100%",
    maxHeight:"100%",
    boxShadow:'none',
    overFlow:'none'

}
const Component=styled(Box)`
    display:flex
`
const Container=styled(Box)`
padding: 56px 0 56px 56px;
`
const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 300;
`;
const QRCOde = styled('img')({
    margin: '50px 0 0 50px',
    height: 264,
    width: 264
});
const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const LoginDialog = () => {
    const {account,setAccount}=useAccount()

    const onLoginSuccess=async(res)=>{
        var decoded = jwt_decode(res.credential);
        setAccount(decoded)
        await addUser(decoded)
        console.log(decoded);
    }
    const onLoginError=(err)=>{
        console.log(err)
    }
  return (
    <Dialog open={true} PaperProps={{sx:DialogStyle}}>
        <Component>
            <Container>
                <Title>Use WhatsApp on your computer</Title>
                <StyledList>
                    <ListItem>1:Open WhatsApp on your phone</ListItem>
                    <ListItem>2:Tap Menu Setting and Select Watsapp Web</ListItem>
                    <ListItem>3:Tap on Link a device </ListItem>

                </StyledList>
            </Container>
            <Box>
                <QRCOde src={qrCodeImage} alt="QR Code"/>
                <Box style={{position: 'absolute', top: '50%', transform: 'translateX(25%) translateY(-25%)'}}>
                    <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError}/>
                </Box>
            </Box>

        </Component>

    </Dialog>
    
  )
}

export default LoginDialog