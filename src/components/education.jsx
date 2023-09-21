import { useState } from "react";
import myIcon from "../icons/edu.svg";
import myIcon2 from "../icons/showMore.svg";
import myIcon3 from "../icons/showLess.svg";

function Section() {
  return (
    <>
      <div className="entry">
        <label htmlFor="education-name">School/College Name</label>
        <input className="education-name" id="education-name" />
      </div>
      <div className="entry">
        <label htmlFor="education-degree">degree</label>
        <input className="education-degree" id="education-degree" />
      </div>
      <div className="entry">
        <label htmlFor="education-start-date">Start Date</label>
        <input type="date" className="education-start-date" id="education-start-date" />
      </div>
      <div className="entry">
        <label htmlFor="education-end-date">End Date</label>
        <input type="date" className="education-end-date" id="education-end-date" />
      </div>
      <div className="entry">
        <label htmlFor="education-location">Location</label>
        <input className="education-location" id="education-location" />
      </div>
    </>
  );
}

export default function Education({ onShow, isActive }) {
    const [index, setIndex] = useState(0);
  if (!isActive) {
    return (
      <h3 onClick={onShow} className="education-head-collapsed">
        {" "}
        <img src={myIcon} />
        Education
        <img src={myIcon2} />
      </h3>
    );
  } else {
    return (
      <div className="education-expanded">
        <h3 onClick={onShow} className="education-head-expanded">
          {" "}
          <img src={myIcon} />
          Education
          <img src={myIcon3} />
        </h3>
        <Section currentStateActive={index === 0} />
        {/* <Section currentStateActive={index === 1} /> */}
      </div>
    );
  }
}
