import React from "react";
import "./headstyle.css";
import header from '../../Images/header-back.png';

export default function Header() {
  return (
    <div>
      <div className="contenedor">
        
        <div className="imagen">
        <span className="tasks">Tasks</span>
        <img src={header} alt=""/>
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
