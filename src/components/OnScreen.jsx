import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/App.css";
import Info from "./personalInfo.jsx";
import Experience from "./experience";
import Education from "./education";
import ActualResume from "./resume";
import view from "../icons/view.svg";
import hide from "../icons/hide.svg";
// import download from '../icons/download.svg';

let personalInfo = {
  name: "John Doe",
  title: "Software Developer",
  mail: "jondoe@coolmail.com",
  phone: "9999999999",
  address: "london, UK",
};

let expData = [
  {
    id: uuidv4(),
    name: "Some Company",
    position: "UI & UX Designer",
    start: "2022-07-04",
    end: "2023-02-01",
    description:
      "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
  },
  {
    id: uuidv4(),
    name: "Some Other Company",
    position: "UX Research Assistant",
    start: "2022-05-02",
    end: "2021-10-09",
    description:
      "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
  },
];

let eduData = [
  {
    id: uuidv4(),
    name: "Some College",
    degree: "B.tech in Computer Science",
    start: "2017-07-01",
    end: "2021-07-05",
    location: "MH, India",
  },
];

function OnScreen() {
  const [isView, setView] = useState(false);
  const [currentState, setState] = useState(0);
  const [formState, setFormState] = useState(0);
  const [expState, setExpState] = useState(0);
  const [eduState, setEduState] = useState(0);
  const handleUpdate = (updatedInfo) => {
    personalInfo = updatedInfo;
    setFormState(formState + 1);
  };
  const handleEduUpdate = (updatedInfo) => {
    eduData = updatedInfo;
    setEduState(eduState + 1);
  };
  const handleExpUpdate = (updatedInfo) => {
    expData = updatedInfo;
    setExpState(expState + 1);
  };
  if (!isView) {
    return (
      <div className="on-screen">
        <div className="input">
          <Info currentState={formState} onUpdate={handleUpdate} />
          <Experience
            onShow={() => {
              if (currentState === 1) {
                setState(0);
              } else {
                setState(1);
              }
            }}
            onUpdate={handleExpUpdate}
            expData={expData}
            isActive={currentState === 1}
          />
          <Education
            onShow={() => {
              if (currentState === 2) {
                setState(0);
              } else {
                setState(2);
              }
            }}
            onUpdate={handleEduUpdate}
            eduData={eduData}
            isActive={currentState === 2}
          />
        </div>
        <div className="output">
          <ActualResume
            personalInfo={personalInfo}
            expData={expData}
            eduData={eduData}
          />
          <div className="controls">
            <img
              src={view}
              alt="view pdf"
              onClick={() => {
                setView(true);
              }}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="on-screen">
        <div className="output-viewing">
          <ActualResume
            personalInfo={personalInfo}
            expData={expData}
            eduData={eduData}
          />
          <div className="controls">
            <img src={hide} alt="hide pdf" onClick={() => setView(false)} />
          </div>
        </div>
      </div>
    );
  }
}

export default OnScreen;
