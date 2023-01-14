import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from "@mui/material"
import profileLogo from "../profilePic.svg"
import "./HeaderBar.scss"


const HeaderBar = () =>
  {
    const userName = "Adam"
    return <div className="kyro-header-bar">
        <div className="kyro-greetings-msg">
            <b>{`Good Morning, ${userName}`}</b>
            <div className="kyro-header-date">January 14, 2023</div>
        </div>
        <div className='kyro-profile-controls'>
            <Button className='kyro-profile-controls__add-btn'><b>+ Add Project</b></Button>
            <img src={profileLogo} className="kyro-profile-controls__photo" alt="Profile Pic" />
            <div className="kyro-profile-controls__profile-descr">
                <b>Adam</b>
                <span className="kyro-profile-role">Project manager</span>
            </div>
        </div>
    </div>
  }
 
export default HeaderBar;
