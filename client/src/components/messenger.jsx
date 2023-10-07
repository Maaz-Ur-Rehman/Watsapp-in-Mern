import React from 'react'
import LoginDialog from './account/LoginDialog'
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import ChatDialog from './chat/chatDialog';
import { useAccount } from './context/AccountProvider';

const Component = styled(Box)`
    height:100vh;
    background:#DCDCDC;

`

const LoginHeader = styled(AppBar)`
height: 200px;
background-color: #128C7E;
box-shadow: none;
`;

const Header = styled(AppBar)`
height: 125px;
background-color: #25D366;
box-shadow: none;
`;
const Messenger = () => {
    const { account, setAccount } = useAccount()
    return (
        <>
            <Component>
                {
                    account
                        ?
                        <>
                            <Header>
                                <Toolbar>

                                </Toolbar>

                            </Header>
                            <ChatDialog />
                        </>
                        :
                        <>
                            <LoginHeader>
                                <Toolbar>

                                </Toolbar>
                            </ LoginHeader>
                            <LoginDialog />
                        </>

                }


            </Component>

        </>
    )
}

export default Messenger