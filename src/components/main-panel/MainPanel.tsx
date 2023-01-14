import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from "@mui/material"
import "./MainPanel.scss"
import HeaderBar from './header-bar/HeaderBar';
import UserDataPanel from './user-data-panel/UserDataPanel';
import ProfilePanel from './profile-panel/ProfilePanel';
import { getUser, saveUser } from '../../serviceUtils.ts/userData';


export interface IUserData {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  phoneWork: string;
  phonePersonal: string;
  location: string;
}

const userInitialState: IUserData = {
  firstName: "",
  lastName: "",
  displayName: "",
  email: "",
  phoneWork: "",
  phonePersonal: "",
  location: ""
}

const MainPanel = () =>
  {

    const [userData, setUserData] = useState<IUserData>(userInitialState);

    const modifyUserData = (event: any) => {
      const userRecord: any = { ...userData};
      userRecord[event.target.name] = event.target.value;
      setUserData(userRecord);
    };

    const setUserDataFromAPI = () => {
      getUser().then(response => response.json()).then(data => setUserData(data)).catch(e => {
        console.log(e);
        alert("An error occured while fetching user details")
      });
    }

    useEffect(() => {
      console.log("Here")
      setUserDataFromAPI();
    }, [])

    const saveChange = () => {
      console.log(userData);
      saveUser(userData).then(
        resposne => resposne.text()
      ).then(
        data => alert(data)
      ).catch((e) => {
        console.log(e);
        alert("An error occured while saving user details")
      });
      saveUser(userData);
      // setUserDataFromAPI();
    };

    const resetData = () => {
      setUserDataFromAPI();
    };

    return <div className="kyro-main-panel">
      <HeaderBar />
      <div className="kyro-main-panel__main">
        <UserDataPanel
          userData={userData}
          dataChangeCallback={modifyUserData}
          saveUser={saveChange}
          resetUser={resetData}
        />
        <ProfilePanel userName={userData.displayName} emailAddress={userData.email} />
      </div>
    </div>
  }
 
export default MainPanel;
