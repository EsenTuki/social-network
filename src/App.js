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
import { compose } from 'redux'
import {initializeApp} from './redux/appReducer'
import Loader from './components/common/loader/Loader'

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized){
      return <Loader/>
    }

    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/profile/:userId?' element={<ProfileContainer />} />
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

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

// РЕШИТЬ ПРОБЛЕМУ С withRouter

export default compose(connect(mapStateToProps,{initializeApp}))(App)