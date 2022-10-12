import React, { Component } from 'react'
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import Login from './components/Login/Login'
import { connect } from 'react-redux'
import {getAuthUserData} from './redux/authReducer'
import { compose } from 'redux'
import { withRouter } from "react-router"

class App extends Component {
  componentDidMount() {
    this.props.getAuthUserData()
  }
  render() {
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/profile/:userId' element={<ProfileContainer />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              {/* <Route path='/profile/:userId' element={<ProfileContainer store={props.store} />} />
              <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />} /> */}
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
// РЕШИТЬ ПРОБЛЕМУ С withRouter

export default compose(
  withRouter,
  connect(null,{getAuthUserData}))(App)