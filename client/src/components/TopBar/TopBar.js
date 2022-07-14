import React from 'react'
import { AppBar, Typography } from '@mui/material'
import useStyles from './styles'
import moments from '../../images/moments.png';
const TopBar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <div className={classes.brandContainer}>
                    <Typography
                        className={classes.heading} variant="h2"
                        align="center">
                        Pixlr App
                    </Typography>
                    <img
                        className={classes.image}
                        src={moments}
                        alt="icon"
                        height="60"
                    />
                </div>
            </AppBar>
        </div>
    )
}

export default TopBar