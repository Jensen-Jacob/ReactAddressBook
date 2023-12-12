import { Button } from "./Button";

export default function SearchForm({
  sortBy,
  search,
  onSearch,
  onSetSortBy,
  onShowAddContact,
  numOfContacts,
}) {
  return (
    // <div className="search-form bg-coral p-4 bg-orange-100 my-4 rounded bg-opacity-100">
    <div className="search-form p-2 md:p-4 bg-orange-100 my-2 md:my-4 rounded bg-opacity-100">
      <form
        action=""
        method="post"
        className="flex flex-col md:flex-row items-center justify-around space-y-1"
      >
        {numOfContacts > 1 ? (
          <span>You have {numOfContacts} contacts</span>
        ) : numOfContacts === 1 ? (
          <span>You have {numOfContacts} contact</span>
        ) : (
          <span>You can start adding contacts!</span>
        )}
        <div className="w-full flex md:flex-none md:w-fit">
          <input
            type="text"
            name="search_bar"
            id="search_bar"
            className="flex-1 rounded border border-solid border-black p-2 text-sm md:text-base lg:text-lg"
            placeholder="Search"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <div className="w-full flex items-center md:flex-none md:w-fit">
          <label
            htmlFor="filter"
            className="mr-1 text-sm md:text-base lg:text-lg md:mr-2"
          >
            Sort By
          </label>
          <select
            name="filter"
            id="filter"
            className="flex-1 rounded border border-solid border-black p-2 text-sm md:text-base lg:text-lg"
            value={sortBy}
            onChange={(e) => onSetSortBy(e.target.value)}
          >
            <option value="noSorting" className="">
              No Sorting
            </option>
            <option value="firstName" className="">
              First Name
            </option>
            <option value="lastName" className="">
              Last Name
            </option>
            <option value="city" className="">
              City
            </option>
            <option value="country" className="">
              Country
            </option>
          </select>
        </div>
        <button
          type="button"
          className="w-full flex p-2 rounded text-sm justify-center bg-orange-300 hover:bg-orange-400 md:flex-none md:w-fit md:text-base lg:text-lg"
          onClick={onShowAddContact}
        >
          <span className="text-center">Add Contact</span>
        </button>
      </form>
    </div>
  );
}
