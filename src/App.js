import React from 'react'
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import Login from './components/Login/Login'

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/:userId' element={<ProfileContainer store={props.store}/>}/>
            <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />} />
            <Route path='/users' element={<UsersContainer/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
