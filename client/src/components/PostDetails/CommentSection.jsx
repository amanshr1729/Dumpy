import React, { useState, useRef } from "react";
import { Paper, Typography, TextField, Button } from "@material-ui/core/";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { commentPost } from "../../actions/posts";

const CommentSection = ({ post }) => {
  console.log(post);
  const classes = useStyles();
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const commentsRef = useRef();
  const handleClick = async () => {
    const finalComment = `${user.result.name}: ${comment}`;
    const newComments = await dispatch(commentPost(finalComment, post._id));
    setComments(newComments);
    setComment("");
    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom color="textPrimary" variant="h6">
            Thoughts of other people on this card
          </Typography>
          {comments?.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              <strong>{c.split(': ')[0]}</strong>
              {c.split(':')[1]}
            </Typography>
          ))}
        </div>
        <div ref={commentsRef} />
      </div>
      {user?.result?.name && (
        <div style={{ width: "70%" }}>
          <Typography gutterBottom variant="h6">
            Give your thoughts on this card
          </Typography>
          <TextField
            fullWidth
            minRows={4}
            variant="outlined"
            label="Comment"
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            style={{ marginTop: "10px" }}
            fullWidth
            disabled={!comment}
            variant="contained"
            onClick={handleClick}
            color="primary"
          >
            Comment
          </Button>
        </div>
      )}
      {!user && (
        <Typography gutterBottom variant="subtitle1" color="textSecondary">
          To give your thoughts on this flashcard please log in
        </Typography>
      )}
    </div>
  );
};

export default CommentSection;
