import { useState } from "react";
import "./AddConact.css";

import { ToastBtn } from "./ReactTosat";

const AddContact = ({ submitHandler }) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandler = (e) => {
    // console.log(e.target.value);
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    submitHandler(contact);
    setContact({ name: "", email: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <div className="newContactBox">
        <p>اطلاعات مخاطب جدید را در فرم زیر وارد کنید.</p>
        <div className="newContact">
          <input
            type="text"
            name="name"
            placeholder="نام و نام خانوادگی ..."
            value={contact.name}
            onChange={changeHandler}
          />
          <input
            type="email"
            name="email"
            placeholder="ایمیل ..."
            value={contact.email}
            onChange={changeHandler}
          />
          <div>
            <ToastBtn />
            {/* <button className="btn-save" type="submit">
              ذخیره مخاطب
            </button> */}
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddContact;
