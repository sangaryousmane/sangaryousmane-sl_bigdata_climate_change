import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import LOGO from "../../Images/logo.jpg";
import "./Navigation.css";


const pages = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Vision", path: "/services" },
  { title: "Contact", path: "/contact" },
  { title: "Predict Climate Change", path: "/predict" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredResults = pages.filter((page) =>
        page.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search submitted:", searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* <Link to="/" className="navbar__logo">
          <img src={LOGO} alt="Logo" />
        </Link> */}
        <div className={`navbar__menu ${menuOpen ? "navbar__menu--open" : ""}`}>
          <br />
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              onClick={closeMenu}
              className="navbar__link"
            >
              {page.title}
            </Link>
          ))}
          <div className="navbar__search-container">
            <form onSubmit={handleSearch} className="navbar__search-form">
              <input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="navbar__search-input"
              />
              <br />
              {/* <button type="submit" className="navbar__search-button">
                <FaSearch />
              </button> */}
            </form>
            {searchResults.length > 0 && (
              <ul className="navbar__search-results">
                {searchResults.map((page) => (
                  <li key={page.path}>
                    <Link
                      to={page.path}
                      onClick={() => {
                        setSearchQuery("");
                        setSearchResults([]);
                        closeMenu();
                      }}
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* <div className="navbar__actions">
          <a
            href="https://wa.me/+14847518401?text=Hello,%20I'm%20interested%20in%20getting%20started!"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__donate-button"
          >
            Donate Now
          </a>
          <button onClick={toggleMenu} className="navbar__menu-toggle">
            {menuOpen ? <FaTimes /> : <FaBars />} {/* Using React Icon here */}
          {/* </button>
        // </div> */} 
      </div>
    </nav>
  );
};

export default Navbar;
