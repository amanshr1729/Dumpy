import React from "react";
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'; 
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';  

const Post = ({post}) => {
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}></CardMedia>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
            <Button style={{color: 'cyan'}} size="small" onClick={() => {}}>
                <MoreHorizIcon fontSize="default"/>
            </Button>

            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() => {}}>
                    <ThumbUpAltIcon fontSize="small"/>
                    Like
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => {}}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>

            </CardActions>
            
            
            
        </Card>
    );
}

export default Post;