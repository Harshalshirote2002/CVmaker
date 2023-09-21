import phone from "../icons/phone.svg";
import mail from "../icons/mail.svg";
import location from "../icons/location.svg";

function AddExps({ expData }) {
  if (expData.length === 0) {
    return <></>;
  } else {
    return (
      <>
        {expData.map((item) => (
          <div className="experience1" key={item.id}>
            <div className="resume-experience-duration" key={item.id}>
              <span className="start">{item.start.slice(0, 7)}</span>-
              <span className="end">{item.end.slice(0, 7)}</span>
            </div>
            <div className="resume-experience-name">{item.name}</div>
            <div className="resume-experience-title">{item.position}</div>
            <div className="resume-experience-description">
              {item.description}
            </div>
          </div>
        ))}
      </>
    );
  }
}

function AddEdus({ eduData }) {
  if (eduData.length === 0) {
    return <></>;
  } else {
    return (
      <>
        {eduData.map((item) => (
          <div className="education1" key={item.id}>
            <div className="resume-education-duration">
              <span className="start">{item.start.slice(0, 7)}</span>-
              <span className="end">{item.end.slice(0, 7)}</span>
            </div>
            <div className="resume-education-name">{item.name}</div>
            <div className="resume-education-location">
              {item.location}
            </div>
            <div className="resume-education-title">{item.degree}</div>
          </div>
        ))}
      </>
    );
  }
}

export default function ActualResume({ personalInfo, eduData, expData }) {
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
        <AddExps expData={expData} />
      </div>

      <div className="resume-education">
        <h3>Education</h3>
        <AddEdus eduData={eduData} />
      </div>
    </div>
  );
}
