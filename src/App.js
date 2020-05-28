import React, { useState, useEffect } from "react";
import Posts from './components/Posts'
import {connect} from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Post from './components/Post'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
  toolbarTitle: {
    flex: 1,
  }
}));

 const App = (props) => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [term, setTerm] = useState("");
  const [currentPage, setCurentPage] = useState(1);
  const [postsPerPage] = useState(10);
  console.log(posts)
  useEffect(() => {  
      setPosts(props.posts);       
  }, []);

  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); 
  const paginate = (pageNumber) => setCurentPage(pageNumber)

  const search = (posts, term) => {
    if (term.length === 0) {
      return currentPosts;
    }
    return posts.filter(post => {
      return post.title.toLowerCase().indexOf(term.toLowerCase()) > -1 || post.body.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  const onSearchChange = term => {
    setTerm( term );
  };

  const visiblePosts = search(posts, term);

  return (
    <div>
         <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
          My blog
        </Typography>
      <BrowserRouter>
      <Switch>
        <Route exact  path={'/'} render={() => <Posts
          onSearchChange={onSearchChange}
           posts={visiblePosts}
           postsPerPage={postsPerPage} 
          totalPosts={posts.length}
          paginate={paginate}/> }  />   
        <Route exact path={'/post/:postId'} component={Post} />       
      </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (store) => ({
  posts: store.posts
})

export default connect(mapStateToProps)(App)
