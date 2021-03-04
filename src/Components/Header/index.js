import React from "react";
import { RiArrowDropLeftLine } from "react-icons/ri";
import "./headstyle.css";

export default function Header() {
  return (
    <div>
      <div className="contenedor">
        <span className="arrow">
          <RiArrowDropLeftLine />
        </span>
        <span className="tasks">Tasks</span>
        <div className="imagen">
          <img
            src="https://projects.invisionapp.com/assets/21135679/987684212/D4B84B9D84CC26025320A2114CF9C54C3BF4ED5A837B4A1F61AC785215FC019E/preview?w=758&cacheVersion=1"
            alt="headback"
          />
        </div>
        <div className="create">CREATE +</div>
        <div className="nav">
          <ul>
            <li className="all"><a href="#">All</a></li>
            <li className="other1"><a href="#">In Progress</a></li>
            <li className="other2"><a href="#">Started</a></li>
            <li className="other3"><a href="#">Completed</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
