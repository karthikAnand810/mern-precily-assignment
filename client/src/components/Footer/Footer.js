import React from 'react'
import { Resizable } from 're-resizable';
import useStyles from './styles'
const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            <Resizable
                className={classes.footer_main}
                minWidth="30vw"
                minHeight="40vh"
                defaultSize={{
                    height: "50vh"
                }}>
                <div>
                    <h2>New of The Day</h2>
                    <p>REACT Stands out as the best framework for blazing fast UI's</p>
                    <p className={classes.paragraphy}>
                        A survey report released by HackerRank has found that developers find
                        JavaScript the most-known language, Go most-wanted to learn, and
                        full-stack development skills the most desired in the job market. The
                        2020 HackerRank Developer Skills Report noted that JavaScript retained
                        its status as the most widely-known programming language, alongside
                        Java, C, and Python.
                    </p>
                    <p className={classes.paragraphy}>
                        A new analysis based on data from StackOverflow has shed light on the
                        average JavaScript developer and their favourite tools and
                        technologies. JavaScript remains the world's most popular programming
                        language despite many others nipping at its heels. 90,000 developers
                        took this year's StackOverflow survey, making it still among the most
                        comprehensive insights of the development community.
                    </p>
                </div>
            </Resizable>
        </div>
    )
}

export default Footer