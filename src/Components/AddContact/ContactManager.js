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
      await deletOneContact(id);
      const filteredContact = contacts.filter((c) => c.id !== id);
      setContacts(filteredContact);
    } catch (error) {
      console.log("error 404");
    }
  };

  const submitHandler = async (contact) => {
    try {
      const { data } = await addOneContact(contact);
      setContacts([...contacts, data]);
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
