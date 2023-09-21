import { useState } from "react";

export default function Info({ currentState, onUpdate }) {
  const [formData, setFormData] = useState({
    name: "John Doe",
  title: "Software Developer",
  mail: "jondoe@coolmail.com",
  phone: "9999999999",
  address: "london, UK",
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
              // console.log(e.target.value)
              onUpdate({ ...formData, name: e.target.value });
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
              onUpdate({ ...formData, title: e.target.value });
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
              onUpdate({ ...formData, mail: e.target.value });
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
              onUpdate({ ...formData, phone: e.target.value });
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
              onUpdate({ ...formData, address: e.target.value });
            }}
            className="input-address"
            id="input-address"
          />
        </div>
      </form>
    </div>
  );
}
