import React from "react";
import "./statstyles.css";
import { FiDownload } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { AiOutlineThunderbolt, AiOutlineClockCircle } from "react-icons/ai";

export default function Statistics() {
  return (
    <div>
      <div className="stat-container">
        <div className="line-container">
          <div className="stat">Statistics</div>
          <div className="download-btn">
            <button className="download">
              <FiDownload />
            </button>
            <button className="arr">
              <IoMdArrowDropdown />
            </button>
          </div>
        </div>

        <table className="table">
          <tr>
            <td className="total">
              <td className="i grid">
                <IoGridOutline />
              </td>
              <td>
                <tr><b>50</b></tr>
                <tr className="text">total projects</tr>
              </td>
            </td>
            <td className="completed">
              <td className="i check">
                <FiCheckCircle />
              </td>
              <td>
                <tr><b>15</b></tr>
                <tr className="text">Completed</tr>
              </td>
            </td>
          </tr>
          <tr>
            <td className="inprog">
              <td className="i bolt">
                <AiOutlineThunderbolt />
              </td>
              <td>
                <tr><b>10</b></tr>
                <tr className="text">In Progress</tr>
              </td>
            </td>
            <td className="delayed">
              <td className="i del">
                <AiOutlineClockCircle />
                </td>
              <td>
                <tr><b>2</b></tr>
                <tr className="text">Delayed</tr>
              </td>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
