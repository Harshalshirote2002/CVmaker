import { useState } from "react";
import "../styles/App.css";
import Info from "./personalInfo.jsx";
import Experience from "./experience";
import Education from "./education";
import Resume from "./demoResume";
import reset from "../icons/reset.svg";
import sync from "../icons/sync.svg";
import print from "../icons/print.svg";

function OnScreen() {
  const [currentState, setState] = useState(0);
  return (
    <div className="on-screen">
      <div className="input">
        <Info />
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
        <Resume />
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
