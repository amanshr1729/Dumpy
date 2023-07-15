import React, { useState, useRef } from 'react';
import { Paper, Typography,TextField, Button } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import useStyles from './styles';


const CommentSection = ({post}) => {
    console.log(post);
    const classes = useStyles();
    const [comments, setComments] = useState([1,2,3,4]);
    const [comment, setComment] = useState('');
    return (
        <div>
        <div className={classes.commentsOuterContainer}>
            <div className={classes.commentsInnerContainer}>
            <Typography gutterBottom color='textPrimary' variant='h6'>Thoughts of other people on this card</Typography>
            {comments.map((c,i) => (
            <Typography key={i} gutterBottom variant='subtitle1' color='textSecondary'>
            Comment{i}
            </Typography>
            
            ))}
            </div>

     
        </div>
        <div style={{width:'70%'}}>
            <Typography gutterBottom variant='h6'>
            Give your thoughts on this card
            </Typography>
            <TextField
                fullWidth
                minRows={4}
                variant="outlined"
                label="Comment"
                multiline
                value={comment}
                onChange= {(e) => setComment(e.target.value)}
            />
            </div>

        </div>
    )
}

export default CommentSection