import React, { useState } from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { Box, InputBase, styled } from '@mui/material';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    &  > * {
        margin: 5px;
        color: #919191;
    }
`;

const Search = styled(Box)`
    border-radius: 18px;
    background-color: #FFFFFF;
    width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    padding-left: 25px;
    font-size: 14px;
    height: 20px;
    width: 100%;
`;


const Footer = ({ sendText,setValue,value }) => {
    return (
        <Container>
            <EmojiEmotionsOutlinedIcon />
            <AttachFileOutlinedIcon />
            <Search>

                <InputField placeholder='Type a messege' value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => sendText(e)} />
            </Search>
            <MicOutlinedIcon />
        </Container>
    )
}

export default Footer