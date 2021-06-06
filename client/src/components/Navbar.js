import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom container">
      <div className="container-fluid">
        <a className="navbar-brand fs-6" href="/">
          XML Filter <small>with</small> Regex
        </a>
          <div className="navbar-nav">
            <a
              className="nav-link"
              aria-current="page"
              href="https://github.com/ozdincalp"
              style={{ fontSize: "2em" }}
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
