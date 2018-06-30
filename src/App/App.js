import React, { Component } from 'react'
import MyAppBar from '../Components/Appbar'
import Sidebar from '../Components/Sidebar';
import MainContentRouter from '../Components/MainContentRouter';
import CssBaseline from '@material-ui/core/CssBaseline'
import Dashboard from '../pages/Dashboard'
import ToDoList from '../pages/ToDoList'
import { BrowserRouter as Router } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home'
import ListIcon from '@material-ui/icons/List'

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0,
  },
  toolbar: theme.mixins.toolbar,
})

const routes = [
  {
    path: "/dashboard",
    text: "Dashboard",
    exact: true,
    icon: HomeIcon,
    component: Dashboard
  },
  {
    path: "/todo",
    text: "To Do",
    exact: true,
    icon: ListIcon,
    component: ToDoList
  }
]

class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <MyAppBar />
          <Sidebar routes={routes} />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <MainContentRouter routes={routes} />
          </main>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App)
