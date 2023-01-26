import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from  'react';
import TopBar from '../components/TopBar';

import banner from "../images/mpu_placeholder.jpg"

const Home = () => {
    return (
        <>
            <TopBar />
            <Box
                style={{
                    // paddingTop: '116px'
                }}
            >
                <Box
                    style={{
                        background: '#f7bc66'
                    }}
                >
                    <img
                        src={banner}
                        alt="Banner"
                        style={{
                            filter: 'blur(2px)',
                            width: '100%',
                            height: '90vh',
                            objectFit: 'cover',
                            overflow: 'hidden',
                            opacity: '0.5'
                        }}
                    />
                    <Typography
                        variant='h1'
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: 'white'
                        }}
                    >
                        UNSW Music Society
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default Home;
