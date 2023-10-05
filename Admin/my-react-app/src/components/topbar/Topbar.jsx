import React from "react";
import "./topbar.css"
import {NotificationsNone} from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <span className="logo">sinsAdmin</span>
        </div>
        <div className="topRight">
            <div className="topbarIcons">
           
            </div>
        </div> 
      </div>
    </div>
  );
}
