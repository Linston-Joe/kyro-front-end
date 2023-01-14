import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from "@mui/material"
import "./UserDataPanel.scss"

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { IUserData } from "../MainPanel"


interface IUserDataPanel {
  userData: IUserData;
  dataChangeCallback: (event: any) => void;
  saveUser: () => void;
  resetUser: () => void;
}

type UserDataPanelProps = IUserDataPanel;


const UserDataPanel = (props: UserDataPanelProps) =>
  {

    const {
      userData,
      dataChangeCallback,
      saveUser,
      resetUser
    } = props;

    const getTextFieldIcon = (icon: JSX.Element) => {
      return {
        startAdornment: (
          <InputAdornment position="start">
            {icon}
          </InputAdornment>
        ),
      }
    }
    return <div className="kyro-user-data-panel">
      <div className="kyro-user-profile-header">My Profile</div>
      <div className="kyro-user-data-card">
        <div className="kyro-user-content">
          <TextField
            id="user-first-name"
            label="First Name"
            InputProps={getTextFieldIcon(<PersonRoundedIcon />)}
            variant="outlined"
            name='firstName'
            value={userData.firstName}
            type="text"
            onChange={dataChangeCallback}
          />
          <TextField
            id="user-last-name"
            label="Last Name"
            InputProps={getTextFieldIcon(<PersonRoundedIcon />)}
            variant="outlined"
            name='lastName'
            value={userData.lastName}
            type="text"
            onChange={dataChangeCallback}
          />
        </div>
        <div className="kyro-user-content">
          <TextField
            id="user-display-name"
            label="Display Name"
            InputProps={getTextFieldIcon(<PersonRoundedIcon />)}
            variant="outlined"
            name='displayName'
            value={userData.displayName}
            type="text"
            onChange={dataChangeCallback}
          />
          <TextField
            id="user-email"
            label="Email"
            InputProps={getTextFieldIcon(<PersonRoundedIcon />)}
            variant="outlined"
            name='email'
            value={userData.email}
            type="text"
            onChange={dataChangeCallback}
          />
        </div>
        <div className="kyro-user-content">
          <TextField
            id="user-phone-work"
            label="Phone No (Work)"
            InputProps={getTextFieldIcon(<PersonRoundedIcon />)}
            variant="outlined"
            name='phoneWork'
            value={userData.phoneWork}
            type="number"
            onChange={dataChangeCallback}
          />
          <TextField
            id="user-phone-personal"
            label="Phone No (Personal)"
            InputProps={getTextFieldIcon(<PersonRoundedIcon />)}
            variant="outlined"
            name='phonePersonal'
            value={userData.phonePersonal}
            type="number"
            onChange={dataChangeCallback}
          />
        </div>
        <div className="kyro-user-content">
          <TextField
            id="user-location"
            label="Location"
            InputProps={getTextFieldIcon(<PersonRoundedIcon />)}
            variant="outlined"
            name='location'
            value={userData.location}
            type="text"
            onChange={dataChangeCallback}
          />
        </div>
        <div className="kyro-user-footer">
          <Button className="kyro-user-save-btn" onClick={saveUser}><b>Save Changes</b></Button>
          <Button className="kyro-user-reset-btn" onClick={resetUser}><b>Reset</b></Button>
        </div>
      </div>
    </div>
  }
 
export default UserDataPanel;
