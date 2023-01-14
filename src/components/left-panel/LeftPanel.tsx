import React from 'react';
import ReactDOM from 'react-dom';
import logo from "./sampleLogo.svg"
import HomeIcon from '@mui/icons-material/Home';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ForumIcon from '@mui/icons-material/Forum';
import DescriptionIcon from '@mui/icons-material/Description';
import BusinessIcon from '@mui/icons-material/Business';
import SettingsIcon from '@mui/icons-material/Settings';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import "./LeftPanel.scss"


const LeftPanel = () =>
  {
    const lefPanelContent = [
      {
        "name": "Home",
        "component": <HomeIcon />
      },
      {
        "name": "Projects",
        "component": <PendingActionsIcon />
      },
      {
        "name": "Dashboard",
        "component": <ForumIcon />
      },
      {
        "name": "Messages",
        "component": <DashboardIcon />
      },
      {
        "name": "Documents",
        "component": <DescriptionIcon />
      },
      {
        "name": "Organizations",
        "component": <BusinessIcon />
      },
      {
        "name": "Settings",
        "component": <SettingsIcon />
      }
    ]
    return <div className="kyro-left-panel">
      <div className="kyro-left-panel__header">
        <img src={logo} className="kyro-left-header-logo" />
        <ListRoundedIcon className="kyro-left-header-icon" sx={{ fontSize: 20 }}/>
      </div>
      <div className="kyro-left-panel__content">
        {
          lefPanelContent.map((item) => <div className="kyro-left-control">
            <span className="kyro-left-control__icon">{item.component}</span>
            {item.name}
          </div>)
        }
      </div>
      <div className="kyro-left-panel__footer">
          <div className="kyro-log-out">
            <span className="kyro-log-out__icon">
              <LogoutRoundedIcon />
            </span>
            Logout
          </div>
      </div>
    </div>
  }
 
export default LeftPanel;
