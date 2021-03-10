import React from "react";
import "./mstyle.css";
import path from '../../Images/Path 9 + Path 8 Mask/Path8.png';
import indicator from '../../Images/indicator.png';

export default function Months() {
  return (
    <div className="parent1">
      <div className="month-container">
        <div className="time">
          <ul className="nav">
            <li className="other1">Day</li>
            <li className="other2">Week</li>
            <li className="month">
              <u>Mo</u>nth
            </li>
            <li className="other3">Year</li>
          </ul>
        </div>
        <div className="cash">
          <span className="pesos">$</span> <span className="num">13,543</span>
        </div>
        <img src={path} className="wave"/>
        
        <div className="oct-dot"/>
        <div className="oct-line"/>
        <ul className="meses">
          <li className="mes">Jun</li>
          <li className="mes">Jul</li>
          <li className="mes">Aug</li>
          <li className="mes">Sep</li>
          <li className="oct">Oct</li>
          <li className="mes">Nov</li>
        </ul>
      
      </div>
      <img
        src={indicator}
        className="indicator"
      />
    </div>
  );
}
