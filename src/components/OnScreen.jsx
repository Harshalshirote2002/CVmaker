import { useState } from "react";
import "../styles/App.css";
import Info from "./personalInfo.jsx";
import Experience from "./experience";
import Education from "./education";
import DemoResume from "./demoResume";
import ActualResume from "./resume";
// import { personalInfo } from "./personalInfo.jsx";
import reset from "../icons/reset.svg";
import sync from "../icons/sync.svg";
import print from "../icons/print.svg";

export let personalInfo = {
  name: "John Doe",
  title: "Software Developer",
  mail: "jondoe@coolmail.com",
  phone: "9999999999",
  address: "london, UK",
};

function OnScreen() {
  const [currentState, setState] = useState(0);
  const [formState, setFormState] = useState(0);
  const handleUpdate = (updatedInfo) => {
    personalInfo = updatedInfo;
    setFormState(formState + 1);
  };
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
          isActive={currentState === 2}
        />
      </div>
      <div className="output">
        <ActualResume personalInfo={personalInfo} />
        <div className="controls">
          <div className="control control-sync">
            <img src={sync} />
          </div>
          <div className="control control-reset">
            <img src={reset} />
          </div>
          <div className="control control-print">
            <img src={print} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnScreen;
