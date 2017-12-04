import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import InterviewList from './InterviewList'
import CompanyList from './CompanyList'
import HomePage from './HomePage'
import InterviewNew from './InterviewNew'

class Main extends Component {
  render() {
    return (
      <div className="main" style={styles.main}>
        <Switch>
          <Route exact path='/interviews' component={InterviewList} />
          <Route exact path='/interviews/new' component={InterviewNew} />
          <Route exact path='/companies' component={CompanyList} />
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    )
  }
}

const styles = {
  main: {
    border: "1px solid black",
    minHeight: '400px'
  }
}

export default Main