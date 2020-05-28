import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 600
  },
  title: {
    fontSize: 14,
  }
});

function Post(props) {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    const [post, setPost] = useState({})
  
    useEffect(() => { 
        let postId = props.match.params.postId;       
        setPost({...props.posts[postId - 1]});       
    }, []);

    return (
            <Card className={classes.root} key={post.id} >
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                   {post.title}
                </Typography>    
                <Typography variant="body2" component="p">
                    {post.body}
                </Typography>
            </CardContent>
            <NavLink className="nav-link" to="/" exact>
          Home
        </NavLink>
        </Card> 
       )
}

const mapStateToProps = (store) => ({
    posts: store.posts
})

export default connect(mapStateToProps)(Post)

