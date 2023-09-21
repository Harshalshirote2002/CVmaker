import phone from "../icons/phone.svg";
import mail from "../icons/mail.svg";
import location from "../icons/location.svg";
// import { personalInfo } from "./personalInfo";
import { expData } from "./experience";
import { eduData } from "./education";

export default function ActualResume({ personalInfo }) {
  return (
    <div className="output-resume">
      <div className="resume-header">
        <h1 className="resume-name">{personalInfo.name}</h1>
        <div className="resume-job-title">{personalInfo.title}</div>
        <div className="resume-email">
          <img src={mail} />
          {personalInfo.mail}
        </div>
        <div className="resume-phone">
          <img src={phone} />
          +91 {personalInfo.phone}
        </div>
        <div className="resume-address">
          <img src={location} />
          {personalInfo.address}
        </div>
      </div>
      <div className="resume-experience">
        <h3>Experience</h3>
        <div className="experience1">
          <div className="resume-experience-duration">
            <span className="start">{expData[0].start.slice(0, 7)}</span>-
            <span className="end">{expData[0].end.slice(0, 7)}</span>
          </div>
          <div className="resume-experience-name">{expData[0].name}</div>
          <div className="resume-experience-title">{expData[0].position}</div>
          <div className="resume-experience-description">
            {expData[0].description}
          </div>
        </div>
        <div className="experience2">
          <div className="resume-experience-duration">
            <span className="start">{expData[1].start.slice(0, 7)}</span>-
            <span className="end">{expData[1].end.slice(0, 7)}</span>
          </div>
          <div className="resume-experience-name">{expData[1].name}</div>
          <div className="resume-experience-title">{expData[1].position}</div>
          <div className="resume-experience-description">
            {expData[1].description}
          </div>
        </div>
      </div>
      <div className="resume-education">
        <h3>Education</h3>
        <div className="education1">
          <div className="resume-education-duration">
            <span className="start">{eduData[0].start.slice(0, 7)}</span>-
            <span className="end">{eduData[0].end.slice(0, 7)}</span>
          </div>
          <div className="resume-education-name">{eduData[0].name}</div>
          <div className="resume-education-location">{eduData[0].location}</div>
          <div className="resume-education-title">{eduData[0].degree}</div>
        </div>
      </div>
    </div>
  );
}
