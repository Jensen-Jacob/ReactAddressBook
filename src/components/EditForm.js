import { useState } from "react";
import { Button } from "./Button";

export function EditForm({
  onShowEditForm,
  onShowAlert,
  contact,
  onEditContact,
}) {
  const [newFirstName, setNewFirstName] = useState(contact.firstName);
  const [newLastName, setNewLastName] = useState(contact.lastName);
  const [newCountry, setNewCountry] = useState(contact.country);
  const [newCity, setNewCity] = useState(contact.city);
  const [newPostalCode, setNewPostalCode] = useState(contact.postalCode);
  const newContact = {
    id: contact.id,
    firstName: newFirstName,
    lastName: newLastName,
    country: newCountry,
    city: newCity,
    postalCode: newPostalCode,
  };

  function handleSubmitEdit() {
    if (
      !newContact.firstName ||
      !newContact.lastName ||
      !newContact.country ||
      !newContact.city ||
      !newContact.postalCode
    )
      return;
    onEditContact(newContact);
    onShowEditForm();
    onShowAlert(["Success!", "Contact Edited Successfuly!"]);
  }
  return (
    <>
      <div
        className="w-screen h-screen top-0 left-0 absolute bg-neutral-700 bg-opacity-60"
        onClick={onShowEditForm}
      ></div>
      <div className="input-form m-4 p-4 border border-solid border-black text-center rounded bg-orange-100 z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute shadow-2xl lg:w-[30rem]">
        <div className="absolute top-0 right-2">
          <button type="button" onClick={onShowEditForm}>
            X
          </button>
        </div>
        <form
          autoComplete="off"
          method="post"
          className="flex items-center flex-wrap flex-col rounded lg:w-full"
          onSubmit={handleSubmitEdit}
        >
          <label htmlFor="first_name" className="lg:w-full md:text-lg">
            First Name
          </label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            value={newFirstName}
            onChange={(e) => setNewFirstName(e.target.value)}
            className="rounded p-1 border border-solid border-black lg:w-full md:text-lg"
            required
          />
          <label htmlFor="last_name" className="lg:w-full md:text-lg">
            Last Name
          </label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            value={newLastName}
            onChange={(e) => setNewLastName(e.target.value)}
            className="rounded p-1 border border-solid border-black lg:w-full md:text-lg"
            required
          />
          <label htmlFor="country" className="lg:w-full md:text-lg">
            Country
          </label>
          <input
            type="text"
            name="country"
            id="country"
            value={newCountry}
            onChange={(e) => setNewCountry(e.target.value)}
            className="rounded p-1 border border-solid border-black lg:w-full md:text-lg"
            required
          />
          <label htmlFor="address" className="lg:w-full md:text-lg">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
            className="rounded p-1 border border-solid border-black lg:w-full md:text-lg"
            required
          />
          <label htmlFor="postal_code" className="lg:w-full md:text-lg">
            Postal Code
          </label>
          <input
            type="text"
            name="postal_code"
            id="postal_code"
            value={newPostalCode}
            onChange={(e) => setNewPostalCode(e.target.value)}
            className="rounded p-1 border border-solid border-black lg:w-full md:text-lg"
            required
          />
          <Button
            type="submit"
            classes="bg-orange-300 p-2 rounded text-base hover:bg-orange-400 mt-4 lg:w-full md:text-lg"
          >
            Save Changes
          </Button>
        </form>
      </div>
    </>
  );
}
