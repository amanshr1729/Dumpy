import React, {useEffect} from 'react';
import flashcards from './Images/flashcard1.jpg';
import {Container, Typography, AppBar, Grow, Grid} from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import { getPosts } from './actions/posts.js';


const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    },[dispatch]);
    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>FlashCards</Typography>
                <img className={classes.image} src={flashcards} alt='flashcards' height='150'/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={10} sm={10}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={10} sm={5}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
export default App;