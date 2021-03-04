import React from "react";
import "./taskstyle.css";

export default function Task() {

// Dinamic progress bar
//   var i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("prog");
//     var width = 20;
//     var id = setInterval(frame, 20);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//         elem.innerHTML = width + "%";
//       }
//     }
//   }
// }

  return (
    <div className="parent">
      <div className="upcoming">
        <span className="s1">Upcoming tasks</span> <span className="s2">5</span>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="title">Order #890PO90</div>
          <div className="fullname">Bryan Williams</div>
          <div className="progress">
            <span className="pro">Progress</span>
            <span className="perc">20%</span>
          </div>
          <div className="progbar">
            <div className="prog"></div>
          </div>
          <div className="date">
            1 day left
          </div>
        </div>
        <div className="card">
          <div className="title">Order #890PO90</div>
          <div className="fullname">Marcus Klaus</div>
          <div className="progress">
            <span className="pro">Progress</span>
            <span className="perc">20%</span>
          </div>
          
          <div className="progbar">
            <div className="prog"></div>
          </div>
          <div className="date">
            3 days left
          </div>
        </div>
      </div>
    </div>
  );
}
