import React from 'react'
import SidebarList from './SidebarList'
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles';
import { array } from 'prop-types'

const drawerWidth = 240

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
})

class Sidebar extends React.Component {
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
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }} >
          <div className={classes.toolbar} />
          <SidebarList routes={routes} />
        </Drawer>
      </div>
    )
  }
}

export default withStyles(styles)(Sidebar)
