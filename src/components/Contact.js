import { useState } from "react";
import { EditForm } from "./EditForm";

export function Contact({
  contact,
  onDeleteContact,
  onEditContact,
  onShowAlert,
}) {
  const [showEditForm, setShowEditForm] = useState(false);

  function handleShowEditForm() {
    setShowEditForm((s) => !s);
  }

  return (
    <>
      {showEditForm && (
        <EditForm
          key={contact.id}
          onShowEditForm={handleShowEditForm}
          contact={contact}
          onEditContact={onEditContact}
          onShowAlert={onShowAlert}
        />
      )}
      <li className="flex flex-col md:flex-row items-center my-2 px-2 py-1 bg-orange-100 rounded justify-around text-center">
        <span className="flex-1 flex-grow gap-1">
          First Name: {contact.firstName}{" "}
        </span>
        <span className="flex-1 flex-grow gap-1">
          Last Name: {contact.lastName}{" "}
        </span>
        <span className="flex-1 flex-grow gap-1">
          Country: {contact.country}
        </span>
        <span className="flex-1 flex-grow gap-1">City: {contact.city} </span>
        <span className="flex-1 flex-grow gap-1">
          Postal Code: {contact.postalCode}
        </span>
        <div>
          <button
            type="button"
            className="w-full flex flex-1 flex-grow my-1 p-2 px-4 rounded text-sm justify-center bg-orange-300 hover:bg-orange-400  md:text-base md:mr-1 lg:mr-0 lg:text-lg"
            onClick={handleShowEditForm}
          >
            Edit
          </button>
          <button
            type="button"
            className="w-full flex flex-1 flex-grow p-2 rounded text-sm text-white justify-center bg-red-600 hover:bg-red-700  md:text-base lg:text-lg"
            onClick={() => {
              onDeleteContact(contact.id);
              onShowAlert(["Success!", "Contact Deleted Successfuly!"]);
            }}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
}
