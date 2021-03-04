import React from "react";
import "./headstyle.css";

export default function Header() {
  return (
    <div>
      <div className="contenedor">
        
        <div className="imagen">
        <span className="tasks">Tasks</span>
        <img src="https://projects.invisionapp.com/assets/21135679/987684209/59F055CF7CF8BCEB8CE83A8714AFE6512AF4B3DE381A4E1AB3A461E548DB33E0/preview?w=758&cacheVersion=1" alt=""/>
        </div>

        <div className="create">CREATE +</div>
                  
        <div className="nav">
          <ul>
            <li className="all"><a href="#all">All</a></li>
            <li className="other1"><a href="#progress">In Progress</a></li>
            <li className="other2"><a href="#started">Started</a></li>
            <li className="other3"><a href="#completed">Completed</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
