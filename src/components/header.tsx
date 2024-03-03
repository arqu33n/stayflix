"use client";
import React from "react";
import { Link } from "react-router-dom";
import Auth from "./auth";
import "../styles/header.css";

const Header: React.FC = () => {
  return (
    <header className="header container">
      <img className="header__logo" src="/logo.svg" />

      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/genres">Genres</Link>
          </li>
          <li>
            <a href="#">Directors</a>
          </li>
          <li>
            <a href="#">Ratings</a>
          </li>
          <li>
            <a href="#">Random selection</a>
          </li>
        </ul>
      </nav>
      <div className="header__search">
        <input
          type="text"
          className="header__search-input"
          placeholder="Search movie/director"
        />
        <button className="header__search-button"></button>
      </div>
      <Auth />
    </header>
  );
};
export default Header;
