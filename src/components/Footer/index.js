import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography, Link } from '@material-ui/core';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Autozone
            </Link>
            &nbsp;
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Box mt={8}>
            <Copyright />
        </Box>
    )
}
