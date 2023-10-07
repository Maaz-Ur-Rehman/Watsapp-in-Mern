import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react'
import formatDate from '../../utils/commonUtils'
import { useAccount } from '../../context/AccountProvider';

const Wrapper = styled(Box)`
    background: #FFFFFF;
    padding: 5px;
    max-width: 60%;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`;

const Own = styled(Box)`
    background: #dcf8c6;
    padding: 5px;
    max-width: 60%;
    width: fit-content;
    margin-left: auto;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`;

const Text = styled(Typography)`
    font-size: 14px;
    padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
    font-size: 10px;
    color: #919191;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;
`;

const Messege = ({ messege }) => {
    const { account } = useAccount()
    return (
        <>
            {messege.senderId === account.sub ?
                <Own>
                    <Text>{messege.text}</Text>
                    <Text>{formatDate(messege.createdAt)}</Text>

                </Own>
                :
                <Wrapper>
                    <Text>{messege.text}</Text>
                    <Text>{formatDate(messege.createdAt)}</Text>

                </Wrapper>
            }
        </>
    )
}

export default Messege