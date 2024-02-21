import React from "react";
import './Header.css';

function Header1() {
    function openGithub() {
        window.open("https://www.github.com/utsavsavalia")
    }
    function openLinkedIn(){
        window.open("https://www.linkedin.com/in/utsav-savalia/")
    }

    return (
        <div className='top'>
            <h1 className='text-white text-3xl pl-3 floater'>Name</h1>
            <p onClick = {openGithub}className='github_link'>Github  |</p>
            <p onClick = {openLinkedIn}className="linkedin_link">|  LinkedIn</p>
            <p className="header_end_line">_</p>
        </div>
    )
}

const Header = () => {
    function openGithub() {
        window.open("https://www.github.com/utsavsavalia")
    }
    function openLinkedIn(){
        window.open("https://www.linkedin.com/in/utsav-savalia/")
    }
    return (
      <div className="aesthetic-header-box">
        <div className="left_section">
          <span>US</span>
        </div>
        <div className="middle_section">
          <span>Utsav Savalia</span>
        </div>
        <div className="right_section">
            <a onClick = {openGithub}>Github</a>
            <a onClick = {openLinkedIn}>LinkedIn</a>
        </div>
      </div>
    );
  };
  

export default Header