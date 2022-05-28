import "./ContactManager.css";
import "./AddContact";
import AddContact from "./AddContact";
import { useEffect, useState } from "react";
import ContactList from "../ContactList/ContactList";
const ContactManager = () => {
  const [contacts, setContacts] = useState([]);

  const deletHandler = (id) => {
    const filteredContact = contacts.filter((c) => c.id !== id);
    setContacts(filteredContact);
  };

  const submitHandler = (contact) => {
    // console.log(contact);
    setContacts([
      ...contacts,
      { id: Math.ceil(Math.random() * 1000), ...contact },
    ]);
  };

  useEffect(() => {
    const saveContacts = JSON.parse(localStorage.getItem("contacts"));
    if (saveContacts) {
      setContacts(saveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div className="headerContactList">
        <div>
          <h4>دفتر اطلاعات تماس</h4>
        </div>
      </div>
      <div>
        <div>
          <AddContact submitHandler={submitHandler} />
        </div>
      </div>
      <ContactList contacts={contacts} onDelet={deletHandler} />
    </>
  );
};

export default ContactManager;
