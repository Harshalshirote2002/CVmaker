import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import myIcon from "../icons/edu.svg";
import myIcon2 from "../icons/showMore.svg";
import myIcon3 from "../icons/showLess.svg";
import editIcon from "../icons/edit.svg";
import deleteIcon from "../icons/delete.svg";

function AddEducation({ onCancel, onConfirm, eduData }) {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    name: "",
    degree: "",
    start: "",
    end: "",
    location: "",
  });
  const handleConfirm = () => {
    onConfirm(formData);
  };
  return (
    <div>
      <div className="entry">
        <label htmlFor="education-name">School/College Name</label>
        <input
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          className="education-name"
          id="education-name"
        />
      </div>
      <div className="entry">
        <label htmlFor="education-degree">degree</label>
        <input
          onChange={(e) => {
            setFormData({ ...formData, degree: e.target.value });
          }}
          className="education-degree"
          id="education-degree"
        />
      </div>
      <div className="entry">
        <label htmlFor="education-start-date">Start Date</label>
        <input
          onChange={(e) => {
            setFormData({ ...formData, start: e.target.value });
          }}
          type="date"
          className="education-start-date"
          id="education-start-date"
        />
      </div>
      <div className="entry">
        <label htmlFor="education-end-date">End Date</label>
        <input
          onChange={(e) => {
            setFormData({ ...formData, end: e.target.value });
          }}
          type="date"
          className="education-end-date"
          id="education-end-date"
        />
      </div>
      <div className="entry">
        <label htmlFor="education-location">Location</label>
        <input
          onChange={(e) => {
            setFormData({ ...formData, location: e.target.value });
          }}
          className="education-location"
          id="education-location"
        />
      </div>
      <div className="entry button-entry">
        <button onClick={handleConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

function EditEdu({ onCancel, onConfirm, id, eduData, onUpdate }) {
  let initialExp = 0;
  for (let i = 0; i < eduData.length; i++) {
    if (eduData[i].id === id) {
      initialExp = eduData[i];
    }
  }
  const [formData, setFormData] = useState(initialExp);
  const handleConfirm = () => {
    onConfirm(formData, formData.id);
  };
  return (
    <div>
      <div className="entry">
        <label htmlFor="education-name">School/College Name</label>
        <input
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          value={formData.name}
          className="education-name"
          id="education-name"
        />
      </div>
      <div className="entry">
        <label htmlFor="education-degree">degree</label>
        <input
          onChange={(e) => {
            setFormData({ ...formData, degree: e.target.value });
          }}
          value={formData.degree}
          className="education-degree"
          id="education-degree"
        />
      </div>
      <div className="entry">
        <label htmlFor="education-start-date">Start Date</label>
        <input
          onChange={(e) => {
            setFormData({ ...formData, start: e.target.value });
          }}
          value={formData.start}
          type="date"
          className="education-start-date"
          id="education-start-date"
        />
      </div>
      <div className="entry">
        <label htmlFor="education-end-date">End Date</label>
        <input
          onChange={(e) => {
            setFormData({ ...formData, end: e.target.value });
          }}
          value={formData.end}
          type="date"
          className="education-end-date"
          id="education-end-date"
        />
      </div>
      <div className="entry">
        <label htmlFor="education-location">Location</label>
        <input
          onChange={(e) => {
            setFormData({ ...formData, location: e.target.value });
          }}
          value={formData.location}
          className="education-location"
          id="education-location"
        />
      </div>
      <div className="entry button-entry">
        <button onClick={handleConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

function OldEdus({ data, setIndex, onUpdate }) {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} id={item.id} className="education-inactive-section">
          {item.name}
          <img src={editIcon} onClick={() => setIndex(item.id)} />
          <img
            onClick={() => {
              for (let i = 0; i < data.length; i++) {
                if (data[i].id === item.id) {
                  data.splice(i, 1);
                  onUpdate(data);
                }
              }
            }}
            src={deleteIcon}
          />
        </div>
      ))}
    </>
  );
}

export default function Education({ onShow, isActive, eduData, onUpdate }) {
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
    if (index === 0) {
      return (
        <div className="education-expanded">
          <h3 onClick={onShow} className="education-head-expanded">
            {" "}
            <img src={myIcon} />
            Education
            <img src={myIcon3} />
          </h3>
          <OldEdus data={eduData} setIndex={setIndex} onUpdate={onUpdate} />
          <div className="add-education">
            <button
              onClick={() => {
                setIndex(1);
              }}
            >
              Add Education
            </button>
          </div>
        </div>
      );
    } else if (index === 1) {
      const handleConfirm = (confirmedData) => {
        eduData.push(confirmedData);
        onUpdate(eduData);
        setIndex(0);
      };
      return (
        <div className="education-expanded">
          <h3 onClick={onShow} className="education-head-expanded">
            {" "}
            <img src={myIcon} />
            Education
            <img src={myIcon3} />
          </h3>
          <AddEducation
            onCancel={() => setIndex(0)}
            onConfirm={handleConfirm}
            eduData={eduData}
          />
        </div>
      );
    } else {
      const handleConfirm = (formData, id) => {
        for (let i = 0; i < eduData.length; i++) {
          if (eduData[i].id === id) {
            eduData[i] = formData;
          }
        }
        onUpdate(eduData);
        setIndex(0);
      };
      return (
        <div className="education-expanded">
          <h3 onClick={onShow} className="education-head-expanded">
            {" "}
            <img src={myIcon} />
            Education
            <img src={myIcon3} />
          </h3>
          <EditEdu
            onCancel={() => setIndex(0)}
            onConfirm={handleConfirm}
            id={index}
            eduData={eduData}
          ></EditEdu>
        </div>
      );
    }
  }
}
