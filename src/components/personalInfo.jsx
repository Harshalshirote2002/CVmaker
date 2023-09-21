import { useState } from "react";

export default function Info({ currentState, onUpdate }) {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    mail: "",
    phone: "",
    address: "",
  });
  return (
    <div className="input-details">
      <form action="#">
        <h3 className="input-details-title">Personal Details</h3>
        <div className="entry">
          <label htmlFor="input-name">Full name</label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              // personalInfo = formData;
              onUpdate(formData);
            }}
            className="input-name"
            id="input-name"
          />
        </div>

        <div className="entry">
          <label htmlFor="input-title">Job title</label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
              // personalInfo = formData;
              onUpdate(formData);
            }}
            className="input-title"
            id="input-title"
          />
        </div>

        <div className="entry">
          <label htmlFor="input-mail">Email</label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, mail: e.target.value });
              // personalInfo = formData;
              onUpdate(formData);
            }}
            className="input-mail"
            id="input-mail"
          />
        </div>

        <div className="entry">
          <label htmlFor="input-phone">Phone number</label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              // personalInfo = formData;
              onUpdate(formData);
            }}
            className="input-phone"
            id="input-phone"
          />
        </div>

        <div className="entry">
          <label htmlFor="input-address">Address</label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, address: e.target.value });
              // personalInfo = formData;
              onUpdate(formData);
            }}
            className="input-address"
            id="input-address"
          />
        </div>
      </form>
    </div>
  );
}
