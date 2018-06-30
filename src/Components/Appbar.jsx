import React from 'react'
import MaterialAppbar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
})

class Appbar extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div>
        <MaterialAppbar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              App title
            </Typography>
          </Toolbar>
        </MaterialAppbar>        
      </div>
    )
  }
}

export default withStyles(styles)(Appbar)
