import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
    palette: {
        primary: {
            main: "#f9a859"
        },
        background: {
            default: '#fff'
        }
    },
    typography: {
        button: {
            fontSize: "1rem",
        },
        logo: {
            fontFamily: "roboto",
            fontWeight: 400,
            fontSize: "2rem",
            lineHeight: 1,
            color: "#000000"
        }
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
