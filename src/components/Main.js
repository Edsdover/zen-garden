import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Landing'
import Profile from './Profile'
import Details from './Details'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Landing}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/:id' component={Details}/>
    </Switch>
  </main>
)

export default Main
