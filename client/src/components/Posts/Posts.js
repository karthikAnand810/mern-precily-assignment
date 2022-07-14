import { CircularProgress, Grid } from '@mui/material';
import React from 'react'
import { Resizable } from 're-resizable';
import { useSelector } from 'react-redux';
import Post from '../Posts/Post/Post';
import useStyles from './styles';
const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    return (
        <div>
            <Resizable
                minWidth="25vw"
                className={classes.post_layer}
                defaultSize={{
                    width: "63vw",
                    height: "75vh",
                }}>
                {!posts.length ? <CircularProgress /> : (
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                        {posts.map((post) => {
                            return <Grid key={post._id} item xs={12} sm={6}>
                                <Post post={post} setCurrentId={setCurrentId} />
                            </Grid>
                        })}
                    </Grid>
                )}
            </Resizable>
        </div>
    )
}

export default Posts