import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts'
import TopBar from './components/TopBar/TopBar';
import useStyles from './styles'
function App() {
    const classes = useStyles()

    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])
    return (
        <Container maxWidth="xl">
            <div className={classes.mainContainer}>
                <TopBar />
                <div className={classes.sub_comp}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                    <Grid item xs={12} sm={4}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                </div>
                <div>
                    <Footer />
                </div>
            </div >
        </Container>
    );
}

export default App;
