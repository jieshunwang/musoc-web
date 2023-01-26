import React from "react";
import { Box } from "@mui/system";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <Box>
            <AppBar
                position="fixed"
                sx={{ bgcolor: 'background.default' }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
                                <Box sx={{ my: 2, mr: 1 }}>
                                    <img
                                        src={logo}
                                        alt="MuSoc Logo"
                                        width={80}
                                        height={80}
                                    />
                                </Box>
                                <Typography variant="logo">UNSW<br/>Music Society</Typography>
                            </Box>
                        </Link>
                        <Link to={'/resources'} style={{ textDecoration: 'none' }}>
                            <Button sx={{ p: 4 }}>ACADEMIC RESOURCES</Button>
                        </Link>
                        <Link to={'/events'} style={{ textDecoration: 'none' }}>
                            <Button sx={{ p: 4 }}>EVENTS</Button>
                        </Link>
                        <Link to={'/careers'} style={{ textDecoration: 'none' }}>
                            <Button sx={{ p: 4 }}>CAREERS AND OPPORTUNITIES</Button>
                        </Link>
                        <Link to={'/about'} style={{ textDecoration: 'none' }}>
                            <Button sx={{ p: 4 }}>ABOUT</Button>
                        </Link>
                    </Box>
                    <Box sx={{ mr: 4 }}>
                        <IconButton
                            target="_blank"
                            href="https://www.instagram.com/musoc_unsw/"
                        >
                            <InstagramIcon color="primary" sx={{ width: 45, height: 45 }}/>
                        </IconButton>
                        <IconButton
                            target="_blank"
                            href="https://www.facebook.com/profile.php?id=100087708972271"
                        >
                            <FacebookIcon color="primary" sx={{ width: 45, height: 45 }}/>
                        </IconButton>
                        <Button
                            variant="contained"
                            sx={{ ml: 2, color: 'white' }}
                            target="_blank"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdvf5gUhc56j-ZURbIbQZwefLMhc3y0Hfw_rr6eKT_kgI5mbA/viewform"
                        >
                            SIGN UP
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopBar;
