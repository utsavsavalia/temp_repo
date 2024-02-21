import React from "react";
import './center_page.css';
import self_image from '../images/my_img.jpeg';
import linkedInLogo from '../images/linkedin_logo.png';
import githubLogo from '../images/github_logo.png'

const center_page = () => {
    function openGithub() {
        window.open("https://www.github.com/utsavsavalia")
    }
    function openLinkedIn(){
        window.open("https://www.linkedin.com/in/utsav-savalia/")
    }
    return (
        <div className="center_div">
            <div className="Introduction">
                <h1 className="test">Hello!<br></br>I'm Utsav<br></br>Savalia</h1>
            </div>

            <div class="right_container">
                <div class = "img_div">
                    <img className = "round_img" src = {self_image}></img>
                </div>

                <div class = "social-icons">
                    <img className = 'linkedin_logo' src = {linkedInLogo} onClick={openLinkedIn}></img>
                    <img className = 'github_logo' src = {githubLogo} onClick={openGithub}></img>
                </div>
            </div>
        </div>
    );
};

export default center_page