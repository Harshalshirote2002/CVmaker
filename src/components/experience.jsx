import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import myIcon from "../icons/exp.svg";
import myIcon2 from "../icons/showMore.svg";
import myIcon3 from "../icons/showLess.svg";

export const expData = [
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

function AddExp({ onCancel, onConfirm }) {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    name: "",
    position: "",
    start: "",
    end: "",
    description: "",
  });
  const handleConfirm = () => {
    onConfirm(formData);
  };
  return (
    <div>
      <div className="entry">
        <label htmlFor="company-name">Name</label>
        <input
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="company-name"
          id="company-name"
        />
      </div>
      <div className="entry">
        <label htmlFor="company-position">position</label>
        <input
          onChange={(e) =>
            setFormData({ ...formData, position: e.target.value })
          }
          className="company-position"
          id="company-position"
        />
      </div>
      <div className="entry">
        <label htmlFor="company-start-date">Start Date</label>
        <input
          onChange={(e) => setFormData({ ...formData, start: e.target.value })}
          type="date"
          className="company-start-date"
          id="company-start-date"
        />
      </div>
      <div className="entry">
        <label htmlFor="company-end-date">End Date</label>
        <input
          onChange={(e) => setFormData({ ...formData, end: e.target.value })}
          type="date"
          className="company-end-date"
          id="company-end-date"
        />
      </div>
      <div className="entry">
        <label htmlFor="experience-description">Description</label>
        <textarea
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="experience-description"
          id="experience-description"
        />
      </div>
      <div className="entry button-entry">
        <button onClick={handleConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

function EditExp({ onCancel, onConfirm, id }) {
  let initialExp = 0;
  for (let i = 0; i < expData.length; i++) {
    if (expData[i].id === id) {
      initialExp = expData[i];
    }
  }
  const [formData, setFormData] = useState(initialExp);
  const handleConfirm = () => {
    onConfirm(formData, formData.id);
  };
  return (
    <div>
      <div className="entry">
        <label htmlFor="company-name">Name</label>
        <input
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
          className="company-name"
          id="company-name"
        />
      </div>
      <div className="entry">
        <label htmlFor="company-position">position</label>
        <input
          onChange={(e) =>
            setFormData({ ...formData, position: e.target.value })
          }
          value={formData.position}
          className="company-position"
          id="company-position"
        />
      </div>
      <div className="entry">
        <label htmlFor="company-start-date">Start Date</label>
        <input
          onChange={(e) => setFormData({ ...formData, start: e.target.value })}
          value={formData.start}
          type="date"
          className="company-start-date"
          id="company-start-date"
        />
      </div>
      <div className="entry">
        <label htmlFor="company-end-date">End Date</label>
        <input
          onChange={(e) => setFormData({ ...formData, end: e.target.value })}
          value={formData.end}
          type="date"
          className="company-end-date"
          id="company-end-date"
        />
      </div>
      <div className="entry">
        <label htmlFor="experience-description">Description</label>
        <textarea
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          value={formData.description}
          className="experience-description"
          id="experience-description"
        />
      </div>
      <div className="entry button-entry">
        <button onClick={handleConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

function OldExps({ data, setIndex }) {
  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          id={item.id}
          className="experience-inactive-section"
          onClick={() => setIndex(item.id)}
        >
          {item.name}
        </div>
      ))}
    </>
  );
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
    if (index === 0) {
      return (
        <div className="experience-expanded">
          <h3 onClick={onShow} className="experience-head-expanded">
            {" "}
            <img src={myIcon} />
            Experience
            <img src={myIcon3} />
          </h3>
          <OldExps data={expData} setIndex={setIndex} />
          <div className="add-experience">
            <button onClick={() => setIndex(1)}>Add Experience</button>
          </div>
        </div>
      );
    } else if (index === 1) {
      const handleConfirm = (confirmedData) => {
        expData.push(confirmedData);
        console.log(expData);
        setIndex(0);
      };
      return (
        <div className="experience-expanded">
          <h3 onClick={onShow} className="experience-head-expanded">
            {" "}
            <img src={myIcon} />
            Experience
            <img src={myIcon3} />
          </h3>
          <AddExp onCancel={() => setIndex(0)} onConfirm={handleConfirm} />
        </div>
      );
    } else if (index !== 1 || index !== 0) {
      const handleConfirm = (formData, id) => {
        for (let i = 0; i < expData.length; i++) {
          if (expData[i].id === id) {
            expData[i] = formData;
          }
        }
        console.log(expData);
        setIndex(0);
      };
      return (
        <div className="experience-expanded">
          <h3 onClick={onShow} className="experience-head-expanded">
            {" "}
            <img src={myIcon} />
            Experience
            <img src={myIcon3} />
          </h3>
          <EditExp
            onCancel={() => setIndex(0)}
            onConfirm={handleConfirm}
            id={index}
          ></EditExp>
        </div>
      );
    }
  }
}
