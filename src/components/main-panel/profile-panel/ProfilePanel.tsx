import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from "@mui/material"
import profileLogo from "../profilePic.svg"
import PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded';
import "./ProfilePanel.scss"


interface IProfilePanel {
  userName: string | undefined;
  emailAddress: string | undefined;
}
type ProfilePanelProps = IProfilePanel;


const ProfilePanel = (props: ProfilePanelProps) =>
  {
    const { userName, emailAddress } = props;
    return <div className="kyro-profile-panel">
      <div className="kyro-profile-panel__content">
        <div className="kyro-profile-container">
          <img src={profileLogo} className="kyro-profile-container__photo" alt="Profile Pic" />
          <PhotoCameraRoundedIcon className="kyro-profile-container__icon" sx={{ fontSize: 40 }} />
        </div>
        <div className='kyro-profile-descr'>
          <span className="kyro-profile-name" >{userName}</span>
          <span className="kyro-profile-email" >{emailAddress}</span>
        </div>
      </div>
    </div>
  }
 
export default ProfilePanel;
