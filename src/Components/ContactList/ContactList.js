import { ToastBtnDelet } from "../AddContact/ReactTosat";
import "./ContactList.css";

const ContactList = ({ contacts, onDelet, addToast }) => {
  return (
    <>
      {contacts.map((contact) => {
        const { name, email, id } = contact;
        return (
          <div className="contact-list-box" key={id}>
            <div>
              <p>نام : {name}</p>
              <p>ایمیل: {email}</p>
            </div>
            <div>
              {/* <button
                className="btn-Delet"
                onClick={() => {
                  onDelet(id);
                }}
              >
                حذف
              </button> */}
              <ToastBtnDelet onDelet={onDelet} id={id} addToast={addToast} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ContactList;
