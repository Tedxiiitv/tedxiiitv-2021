import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Team from './Components/Team/Team'
import About from './Components/About/About'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/team' component={Team} />
      </Router>
    </React.Fragment>
  )
}

export default App
