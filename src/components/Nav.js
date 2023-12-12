export default function Nav() {
  return (
    // Navbar
    <nav className="relative mx-auto p-3 text-center">
      {/* Flex Contaqiner */}
      <div className="flex items-center justify-center space-x-4">
        {/* Logo */}
        <img
          src="address-book-logo.svg"
          alt="Site Logo"
          className="h-10 w-10 md:h-16 md:w-16 lg:h-14 lg:w-14"
        />
        <h1 className="text-2xl text-orange-400 font-bold md:text-4xl">
          Address Book
        </h1>
      </div>
    </nav>
  );
}
