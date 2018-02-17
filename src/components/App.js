import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import { withStyles } from 'material-ui/styles';
import VisibleTodoList from '../containers/VisibleTodoList'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 20,
  },
};
const App = (props) => {

  const { classes } = props;
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Todos
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}
export default withStyles(styles)(App)
