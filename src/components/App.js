import { useState } from "react";
import SuccessAlert from "./SuccessAlert";
import Nav from "./Nav";
import SearchForm from "./SearchForm";
import InputForm from "./InputForm";
import AddressList from "./AddressList";
import Footer from "./Footer";
import { data } from "./data";

function App() {
  const [showInputForm, setShowInputForm] = useState(false);
  const [contacts, setContacts] = useState(data);
  const [sortBy, setSortBy] = useState("noSorting");
  const [search, setSearch] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const numOfContacts = contacts.length;
  const [alertText, setAlertText] = useState([]);

  function handleShowInputForm() {
    setShowInputForm((s) => !s);
  }

  function handleAddContact(contact) {
    setContacts((contacts) => [...contacts, contact]);
  }

  function handleDeleteContact(id) {
    setContacts((contacts) => contacts.filter((item) => item.id !== id));
  }

  function handleEditContact(newContact) {
    const contactIndex = contacts.findIndex(
      (contact) => contact.id === newContact.id
    );

    contacts[contactIndex].firstName = newContact.firstName;
    contacts[contactIndex].lastName = newContact.lastName;
    contacts[contactIndex].country = newContact.country;
    contacts[contactIndex].city = newContact.city;
    contacts[contactIndex].postalCode = newContact.postalCode;
  }

  function handleSortBy(sort) {
    setSortBy(sort);
  }

  function handleSearch(str) {
    setSearch(str.toLowerCase());
  }

  function handleShowAlert(childrenArray) {
    if (showAlert) setShowAlert((s) => !s);
    setShowAlert((s) => !s);
    setAlertText(childrenArray);
  }

  let sortedContacts;

  if (sortBy === "noSorting") sortedContacts = contacts;

  if (sortBy === "firstName") {
    sortedContacts = contacts.slice().sort((a, b) => {
      let firstNameA = a.firstName.toLowerCase(),
        firstNameB = b.firstName.toLowerCase();

      if (firstNameA < firstNameB) return -1;

      if (firstNameA > firstNameB) return 1;

      return 0;
    });
  }

  if (sortBy === "lastName") {
    sortedContacts = contacts.slice().sort((a, b) => {
      let lastNameA = a.lastName.toLowerCase(),
        lastNameB = b.lastName.toLowerCase();

      if (lastNameA < lastNameB) return -1;

      if (lastNameA > lastNameB) return 1;

      return 0;
    });
  }

  if (sortBy === "city") {
    sortedContacts = contacts.slice().sort((a, b) => {
      let cityA = a.city.toLowerCase(),
        cityB = b.city.toLowerCase();

      if (cityA < cityB) return -1;

      if (cityA > cityB) return 1;

      return 0;
    });
  }

  if (sortBy === "country") {
    sortedContacts = contacts.slice().sort((a, b) => {
      let countryA = a.country.toLowerCase(),
        countryB = b.country.toLowerCase();

      if (countryA < countryB) return -1;

      if (countryA > countryB) return 1;

      return 0;
    });
  }

  let finalContacts;

  if (search !== "") {
    finalContacts = sortedContacts
      .slice()
      .filter(
        (contact) =>
          contact.firstName.toLowerCase().match(search) ||
          contact.lastName.toLowerCase().match(search)
      );
  } else {
    finalContacts = sortedContacts;
  }

  return (
    <div className="App h-screen">
      <div className="container  m-auto w-200 p-4">
        <Nav />
        {showAlert && alertText.length > 0 ? (
          <SuccessAlert onShowAlert={handleShowAlert}>{alertText}</SuccessAlert>
        ) : (
          <></>
        )}
        <SearchForm
          sortBy={sortBy}
          numOfContacts={numOfContacts}
          search={search}
          onSearch={handleSearch}
          onSetSortBy={handleSortBy}
          onShowAddContact={handleShowInputForm}
        />
        {showInputForm && (
          <InputForm
            onShowAddContact={handleShowInputForm}
            onAddContact={handleAddContact}
            onShowAlert={handleShowAlert}
          />
        )}
        {numOfContacts > 0 ? (
          <AddressList
            contacts={finalContacts}
            onDeleteContact={handleDeleteContact}
            onEditContact={handleEditContact}
            onShowAlert={handleShowAlert}
          />
        ) : (
          <></>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
