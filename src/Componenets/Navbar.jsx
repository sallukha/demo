import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand text-white" to="/">
            NEWS hub
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
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <Link
                  class="nav-link active text-white"
                  aria-current="page"
                  to="/Home"
                >
               WELCOME to news hub
                </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
