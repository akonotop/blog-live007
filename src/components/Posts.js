import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Pages} from '../components/Pages'
import SearchPanel from '../components/SearchPanel'

import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 600,
    margin: 'auto auto ' + 20 + 'px auto'
  },
  title: {
    fontSize: 14,
  }
});

function Posts(props) {
    const classes = useStyles();
    return (
        <>
        <SearchPanel onSearchChange={props.onSearchChange} />
            {props.posts.map(post => (
                <Card className={classes.root} key={post.id} >
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {post.title}
                        </Typography>    
                        <Typography variant="body2" component="p">
                            {post.body.slice(0,80)}
                        </Typography>
                        <Typography className={classes.root}>                        
                            <NavLink to={`/post/${post.id}`} >
                                Link
                            </NavLink>
                        </Typography>
                    </CardContent>              
                </Card>
            ))}  
        <Pages className={classes.root}
          postsPerPage={props.postsPerPage} 
          totalPosts={props.totalPosts}
          paginate={props.paginate}
        />
       </>     
    )
}

export default Posts

