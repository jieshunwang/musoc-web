import React from "react";
import { Box } from "@mui/system";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import logo from "../images/logo.jpg";

const TopBar = () => {
    return (
        <Box>
            <AppBar
                position="static"
                sx={{ bgcolor: 'background.default' }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
                            <Box sx={{ my: 2, mr: 2 }}>
                                <img
                                    src={logo}
                                    alt="MuSoc Logo"
                                    width={80}
                                    height={80}
                                />
                            </Box>
                            <Typography variant="logo">UNSW<br/>Music Society</Typography>
                        </Box>
                        <Button>ABOUT US</Button>
                        <Button>OUR TEAM</Button>
                        <Button>CONTACT US</Button>
                    </Box>
                    <Box sx={{ mr: 4 }}>
                        <IconButton>
                            <YouTubeIcon color="primary" sx={{ width: 45, height: 45 }}/>
                        </IconButton>
                        <IconButton>
                            <InstagramIcon color="primary" sx={{ width: 45, height: 45 }}/>
                        </IconButton>
                        <IconButton>
                            <FacebookIcon color="primary" sx={{ width: 45, height: 45 }}/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopBar;
