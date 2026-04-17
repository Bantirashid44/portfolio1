const Navbar1 = () => {
  return (
    <nav className="bg-blue-600 text-white">
        <ul className="hidden peer-checked:block md:hidden bg-blue-500 px-4 pb-4 space-y-2">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div className="flex justify-between items-center p-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">MyApp</h1>

        {/* Hidden Checkbox */}
        <input type="checkbox" id="menu-toggle" className="hidden peer" />

        {/* Hamburger Button */}
        <label htmlFor="menu-toggle" className="md:hidden text-2xl cursor-pointer">
          ☰
        </label>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">About</li>
          <li className="hover:text-gray-200 cursor-pointer">Services</li>
          <li className="hover:text-gray-200 cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Mobile Menu */}
      
    </nav>
  );
};

export default Navbar1;