import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Landing'
import Profile from './Profile'
import Details from './Details'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/zen-garden' component={Landing}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/details/:id' component={Details}/>
    </Switch>
  </main>
)

export default Main
