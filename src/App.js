import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile store={props.store}/>}/>
            <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />} />
            <Route path='/users' element={<UsersContainer/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
