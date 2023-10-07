import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem, styled } from '@mui/material';
import InfoDrawer from '../../drawer/infoDrawer';

const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;

const HeaderMenu = () => {
    const [open, setOpen] = useState(null);
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleClick = (e) => {
        setOpen(e.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };
    const toggleDrawer = () => {
        setOpenDrawer(true);
    }
    return (
        <>
            <MoreVertIcon onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            > 
            <MenuOption onClick={() => { handleClose(); toggleDrawer()}}>Profile</MenuOption>
          
            </Menu>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
        </>
    );
};

export default HeaderMenu;
