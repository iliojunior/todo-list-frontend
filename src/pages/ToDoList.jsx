import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import NewIcon from '@material-ui/icons/StarBorder'
import DoingIcon from '@material-ui/icons/StarHalf'
import DoneIcon from '@material-ui/icons/Star'

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  button: {
    margin: theme.spacing.unit,
    float: 'right',
  },
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
})

const styleIcon = {
  newIcon: {
    color: '#F44336',
  },
  doingIcon: {
    color: '#FFEB3B',
  },
  doneIcon: {
    color: '#4CAF50',
  },
}

const getSituationIcon = (situation) => {
  let Icon = NewIcon
  let style = styleIcon.newIcon

  switch(situation) {
    case 'DOING':
      Icon = DoingIcon
      style = styleIcon.doingIcon
      break
    case 'DONE':
      Icon = DoneIcon
      style = styleIcon.doneIcon
      break
  }

  return (
    <Icon style={style} />
  )
}

const renderRowTable = (todo, index) => (
  <TableRow key={index}>
    <TableCell>{todo.id}</TableCell>
    <TableCell>{todo.title}</TableCell>
    <TableCell>{todo.description}</TableCell>
    <TableCell>{getSituationIcon(todo.situation)}</TableCell>
  </TableRow>
)

class ToDoList extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8081/todos')
      .then(response => response.json())
      .then(response => {
        this.setState({
          todos: response
        })
      })
  }

  render() {
    const { classes } = this.props
    const { todos } = this.state

    return (
      <div>
        <Typography variant="caption" noWrap>
          To Do List
        </Typography>
        <Paper className={classes.paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Decription</TableCell>
                <TableCell>Situation</TableCell>
              </TableRow>
              { todos.map(renderRowTable) }
            </TableHead>
          </Table>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(ToDoList)
