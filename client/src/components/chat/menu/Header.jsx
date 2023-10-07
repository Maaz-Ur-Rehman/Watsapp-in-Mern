import { Box,styled } from '@mui/material'

import MessageIcon from '@mui/icons-material/Message';
import React, { useState } from 'react'
import { useAccount } from '../../context/AccountProvider'
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/infoDrawer';
const Component = styled(Box)`
height: 44px;
background: #ededed;
display: flex;
padding: 8px 16px;
align-items: center;
`;

const Wrapper = styled(Box) `
margin-left: auto;
& > * {
    margin-left: 2px;
    padding: 8px;
    color: #000;
};
& :first-child {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 3px;
}
`;

const Image = styled('img') ({
height: 40,
width: 40,
borderRadius: '50%'
})
const Header = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

    const { account } = useAccount()
    console.log(account, "acoutnt")
    return (
        <>
            <Component>
                <Image src={account.picture} alt='dp' onClick={()=>toggleDrawer()} />
                <Wrapper>
                    <MessageIcon />
                    <HeaderMenu />
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
        </>
    )
}

export default Header