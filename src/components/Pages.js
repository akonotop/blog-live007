import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const Pages = ({postsPerPage, totalPosts, paginate}) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    paginate(value);
  };

    return (
      <div className={classes.root}>
      <Typography>Page: {page}</Typography>
      <Pagination count={totalPosts/ postsPerPage} page={page} onChange={handleChange} />
    </div>
        
    )
}
