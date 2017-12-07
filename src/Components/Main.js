import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import InterviewList from './Interviews/InterviewList'
import CompanyList from './Companies/CompanyList'
import HomePage from './HomePage'
import InterviewForm from './Interviews/InterviewForm'
import SearchBox from './Searches/searchBox'
import UserProfile from './Users/UserProfile'
import CompanyItemDetail from './Companies/CompanyItemDetail'

class Main extends Component {

  render() {
    return (
      <div className="main" style={styles.main}>
        <Switch>
          <Route exact path='/interviews' component={InterviewList} />
          <Route exact path='/interviews/new' component={InterviewForm} />
          <Route exact path='/companies' component={CompanyList} />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/search' component={SearchBox} />
          <Route exact path='/users/:id' component={UserProfile} />
          <Route exact path='/companies/:id' component={CompanyItemDetail} />
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
