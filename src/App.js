import React from 'react';
import Header from './components/Header';
import Center_page from './components/center_page';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    // <div className='top'>
    //         <h1 className='text-white text-3xl pl-3 floater'>URL yo</h1>
    //         {/* <p onClick={openLinkedIn} className='contact'>Contact</p> */}
    // </div>

    <div className="App">
      <div><Header /> </div>
      <div><Center_page /> </div>
      <div><Footer /> </div>
    </div>
    
  );
}

export default App;
