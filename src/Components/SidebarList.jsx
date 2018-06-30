import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { array } from 'prop-types'

const styles = {
  activeLink: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
}

const renderLink = (link, index, classes) => {
  const TagIcon = link.icon

  return (
    <ListItem
      component={NavLink}
      activeClassName={classes.activeLink}
      to={link.path}
      key={index}
      exact
      button>
      <ListItemIcon>
        <TagIcon />
      </ListItemIcon>
      <ListItemText primary={link.text} />
    </ListItem>
  )
}

class SidebarList extends React.Component {
  static propTypes = {
    routes: array.isRequired,
  }

  render() {
    const {
      routes,
      classes,
    } = this.props

    return (
      <div>
        <List component="nav">
          { routes.map((link, index) => renderLink(link, index, classes)) }
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(SidebarList)
