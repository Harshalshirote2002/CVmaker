import phone from "../icons/phone.svg";
import mail from "../icons/mail.svg";
import location from "../icons/location.svg";

export default function Resume() {
  return (
    <div className="output-resume">
      <div className="resume-header">
        <h1 className="resume-name">John Doe</h1>
        <div className="resume-job-title">Software Developer</div>
        <div className="resume-email">
          <img src={mail} />
          jondoe@coolmail.com
        </div>
        <div className="resume-phone">
          <img src={phone} />
          +91 9999999999
        </div>
        <div className="resume-address">
          <img src={location} />
          london, UK
        </div>
      </div>
      <div className="resume-experience">
      <h3>Experience</h3>
        <div className="experience1">
          <div className="resume-experience-duration">
            <span className="start">07-2022</span>-
            <span className="end">02-2023</span>
          </div>
          <div className="resume-experience-name">Some Company</div>
          <div className="resume-experience-title">UI & UX Designer</div>
          <div className="resume-experience-description">
            Designed and prototyped user interface patterns for various clients
            in various industries, ranging from self-service apps within the
            telecommunications-sector to mobile games for IOS and Android
          </div>
        </div>
        <div className="experience2">
          <div className="resume-experience-duration">
            <span className="start">05-2022</span>-
            <span className="end">10-2021</span>
          </div>
          <div className="resume-experience-name">Some Other Company</div>
          <div className="resume-experience-title">UX Research Assistant</div>
          <div className="resume-experience-description">
            Supported senior researchers on accessibility standards for the open
            web. Created and usability tested wireframes and prototypes.
            Produced interactive documentation for quick onboarding of new
            researchers.
          </div>
        </div>
      </div>
      <div className="resume-education">
      <h3>Education</h3>
        <div className="education1">
          <div className="resume-education-duration">
            <span className="start">07-2017</span>-
            <span className="end">07-2021</span>
          </div>
          <div className="resume-education-name">Some College</div>
          <div className="resume-education-location">MH, India</div>
          <div className="resume-education-title">B.tech Computer Science</div>
        </div>
      </div>
    </div>
  );
}
