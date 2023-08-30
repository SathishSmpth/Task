import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./appContext";

export default function Navbar() {
  const { setSearchBreed,searchBreed } = useContext(AppContext);
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                value={searchBreed}
                onChange={(e)=>setSearchBreed(e.target.value)}
                aria-label="Search"
              />
            </li>
            <li class="nav-item">
              <Link
                class="btn btn-light ms-1"
                aria-disabled="true"
                to="/favourite"
              >
                My Favourite
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
