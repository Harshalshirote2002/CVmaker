import { useState } from "react";
import myIcon from "../icons/exp.svg";
import myIcon2 from "../icons/showMore.svg";
import myIcon3 from "../icons/showLess.svg";

function Section({ currentStateActive }) {
  if (!currentStateActive) {
    return (
      <div className="experience-expanded-inactive-section">Experience</div>
    );
  } else {
    return (
      <div>
        <div className="entry">
          <label htmlFor="company-name">Name</label>
          <input className="company-name" id="company-name" />
        </div>
        <div className="entry">
          <label htmlFor="company-position">position</label>
          <input className="company-position" id="company-position" />
        </div>
        <div className="entry">
          <label htmlFor="company-start-date">Start Date</label>
          <input type="date" className="company-start-date" id="company-start-date" />
        </div>
        <div className="entry">
          <label htmlFor="company-end-date">End Date</label>
          <input type="date" className="company-end-date" id="company-end-date" />
        </div>
        <div className="entry">
          <label htmlFor="experience-description">Description</label>
          <textarea
            className="experience-description"
            id="experience-description"
          />
        </div>
      </div>
    );
  }
}

export default function Experience({ onShow, isActive }) {
  
  const [index, setIndex] = useState(0);
  if (!isActive) {
    return (
      <h3 onClick={onShow} className="experience-head-collapsed">
        {" "}
        <img src={myIcon} />
        Experience
        <img src={myIcon2} />
      </h3>
    );
  } else {
    return (
      <div className="experience-expanded">
        <h3 onClick={onShow} className="experience-head-expanded">
          {" "}
          <img src={myIcon} />
          Experience
          <img src={myIcon3} />
        </h3>
        <Section currentStateActive={index === 0} />
        {/* <Section currentStateActive={index === 1} /> */}
      </div>
    );
  }
}
