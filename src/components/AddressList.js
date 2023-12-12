import { Contact } from "./Contact";

export default function AddressList({
  contacts,
  onDeleteContact,
  onEditContact,
  onShowAlert,
}) {
  return (
    <ul className="h-[29.8rem] my-2 overflow-y-auto lg:h-[35.5rem]">
      {contacts.map((contact) => (
        <Contact
          contact={contact}
          key={contact.id}
          onDeleteContact={onDeleteContact}
          onEditContact={onEditContact}
          onShowAlert={onShowAlert}
        />
      ))}
    </ul>
  );
}
