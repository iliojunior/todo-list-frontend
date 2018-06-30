import React from 'react'
import { Route } from 'react-router-dom'
import { array } from 'prop-types'

const renderRoute = (route, index) => (
  <Route
    key={index}
    path={route.path}
    exact={route.exact}
    component={route.component} />
)

export default class MainContentRouter extends React.Component {
  static propTypes = {
    routes: array.isRequired,
  }

  render() {
    const { routes } = this.props
    
    return (
      <div>
        { routes.map(renderRoute) }
      </div>
    )
  }
}
