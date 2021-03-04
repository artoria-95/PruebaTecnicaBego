import React from "react";
import "./mstyle.css";

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
        <img src="https://projects.invisionapp.com/assets/21135679/987684215/5059ECD73249DBC6C834CD9C00351433677EE7DD4AC5FFEA4580F94854938D1F/preview?w=758&cacheVersion=1" className="wave"/>
        
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
        src="https://projects.invisionapp.com/assets/21135679/987684213/17AC41C05CB672FE00E3DE96AD13B4C0D4F5EBCA7D2AC5B126D57DBD57BFDC18/preview?w=758&cacheVersion=1"
        className="indicator"
      />
    </div>
  );
}
