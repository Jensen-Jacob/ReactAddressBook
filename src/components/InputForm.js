import { useState } from "react";
import { Button } from "./Button";

export default function InputForm({
  onShowAddContact,
  onShowAlert,
  onAddContact,
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  function handleAddContact(c) {
    onAddContact(c);
    onShowAlert(["Success!", "Contact Added Successfuly!"]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!firstName || !lastName || !country || !city || !postalCode) return;

    const newContact = {
      id: Date.now(),
      firstName: firstName,
      lastName: lastName,
      country: country,
      city: city,
      postalCode: postalCode,
    };

    handleAddContact(newContact);
    onShowAddContact();
  }

  return (
    <>
      <div
        className="w-screen h-screen top-0 left-0 absolute bg-neutral-700 bg-opacity-60"
        onClick={onShowAddContact}
      ></div>
      <div className="input-form m-4 p-4 border border-solid border-black text-center rounded bg-orange-100 z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute shadow-2xl lg:w-[30rem]">
        <div className="absolute top-0 right-2">
          <button
            type="button"
            onClick={onShowAddContact}
            className="text-sm md:text-base lg:text-lg"
          >
            {" "}
            X{" "}
          </button>
        </div>
        <form
          autoComplete="off"
          method="post"
          className="flex items-center flex-wrap flex-col rounded lg:w-full"
          onSubmit={handleSubmit}
        >
          <label htmlFor="first_name" className="lg:w-full md:text-lg">
            First Name
          </label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            className="rounded p-1 border border-solid border-black lg:w-full md:text-lg"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label htmlFor="last_name" className="lg:w-full md:text-lg">
            Last Name
          </label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            className="rounded p-1 border border-solid border-black lg:w-full md:text-lg"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label htmlFor="city" className="lg:w-full md:text-lg">
            Country
          </label>
          <input
            type="text"
            name="city"
            id="city"
            className="rounded p-1 border border-solid border-black lg:w-full md:text-lg"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          <label htmlFor="address" className="lg:w-full md:text-lg">
            City
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="rounded p-1 border border-solid border-black lg:w-full md:text-lg"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <label htmlFor="postal_code" className="lg:w-full md:text-lg">
            Postal Code
          </label>
          <input
            type="number"
            name="postal_code"
            id="postal_code"
            className="rounded p-1 border border-solid border-black lg:w-full md:text-lg"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
          <Button
            type="submit"
            classes="bg-orange-300 p-2 rounded text-base hover:bg-orange-400 mt-4 lg:w-full md:text-lg"
          >
            Add contact
          </Button>
        </form>
      </div>
    </>
  );
}
