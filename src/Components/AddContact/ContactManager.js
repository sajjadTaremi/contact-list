import "./ContactManager.css";
import "./AddContact";
import AddContact from "./AddContact";
import { useEffect, useState } from "react";
import ContactList from "../ContactList/ContactList";
import getContactServise from "../Navbar/services/getContactService";
import deletOneContact from "../Navbar/services/deletContactServise";
import addOneContact from "../Navbar/services/addContactServise";
const ContactManager = () => {
  const [contacts, setContacts] = useState([]);

  const deletHandler = async (id) => {
    try {
      const filteredContact = contacts.filter((c) => c.id !== id);
      setContacts(filteredContact);
      await deletOneContact(id);
    } catch (error) {}
  };

  const submitHandler = async (contact) => {
    try {
      setContacts([
        ...contacts,
        { id: Math.ceil(Math.random() * 1000), ...contact },
      ]);
      await addOneContact(contact);
    } catch (error) {}
  };

  useEffect(() => {
    const getContacts = async () => {
      const { data } = await getContactServise();
      setContacts(data);
    };
    try {
      getContacts();
    } catch (error) {}
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

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
