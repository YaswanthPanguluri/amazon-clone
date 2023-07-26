import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
function Header() {
  return (
    <nav className="header">
      {/* Logo image on the left */}
      <Link to="/login">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      {/* Search Box */}
      <div className="header__search">
        <input type="text" className="header__searchInput"></input>
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 1st Link */}

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span>Hai yaswanth</span>
            <span>Sign In</span>
          </div>
        </Link>

        {/* 2nd Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span>Returns</span>
            <span>& orders</span>
          </div>
        </Link>
        {/* 3rd Link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>
        {/* 4th Link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span>Hai yaswanth</span>
            <span>Sign In</span>
          </div>
        </Link>
      </div>
      {/* Bhasket icon with number */}
    </nav>
  );
}

export default Header;
