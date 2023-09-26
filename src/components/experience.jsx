import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import editIcon from "../icons/edit.svg";
import deleteIcon from "../icons/delete.svg";

function AddExp({ onCancel, onConfirm, expData }) {
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
    <div className="entries-expanded">
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

function EditExp({ onCancel, onConfirm, id, expData }) {
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
    <div className="entries-expanded">
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

function OldExps({ data, setIndex, onUpdate }) {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} id={item.id} className="experience-inactive-section">
          {item.name}
          <img src={editIcon} onClick={() => setIndex(item.id)} />
          <img
            src={deleteIcon}
            onClick={() => {
              for (let i = 0; i < data.length; i++) {
                if (data[i].id === item.id) {
                  data.splice(i, 1);
                  onUpdate(data);
                }
              }
            }}
          />
        </div>
      ))}
    </>
  );
}

export default function Experience({ onShow, isActive, expData, onUpdate }) {
  const [index, setIndex] = useState(0);
  if (!isActive) {
    return;
  } else {
    if (index === 0) {
      return (
        <div className="container-expanded">
          <OldExps data={expData} setIndex={setIndex} onUpdate={onUpdate} />
          <div className="add-experience">
            <button onClick={() => setIndex(1)}>Add Experience</button>
          </div>
        </div>
      );
    } else if (index === 1) {
      const handleConfirm = (confirmedData) => {
        expData.push(confirmedData);
        onUpdate(expData);
        setIndex(0);
      };
      return (
        <div className="container-expanded">
          <AddExp
            onCancel={() => setIndex(0)}
            onConfirm={handleConfirm}
            expData={expData}
          />
        </div>
      );
    } else if (index !== 1 || index !== 0) {
      const handleConfirm = (formData, id) => {
        for (let i = 0; i < expData.length; i++) {
          if (expData[i].id === id) {
            expData[i] = formData;
          }
        }
        onUpdate(expData);
        setIndex(0);
      };
      return (
        <div className="container-expanded">
          <EditExp
            onCancel={() => setIndex(0)}
            onConfirm={handleConfirm}
            id={index}
            expData={expData}
          ></EditExp>
        </div>
      );
    }
  }
}
