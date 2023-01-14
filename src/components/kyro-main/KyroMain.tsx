import React from 'react';
import ReactDOM from 'react-dom';
import CenterPanel from '../main-panel/MainPanel';
import LeftPanel from "../left-panel/LeftPanel"
import "./KyroMain.scss"


const KyroMain = () =>
  {
    return <div className="kyro-main">
      <LeftPanel />
      <CenterPanel />
    </div>
  }
 
export default KyroMain;
