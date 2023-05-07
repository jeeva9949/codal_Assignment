import "./navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="con">
      <div className="container-fluid p-0 m-0  Navbar_container ">
        <div className="navbar navbar-light navbar-expand-lg logo-conatiner">
          <Link
            className="navbar-brand ps-3 jeevaname"
            style={{ color: "black", fontWeight: "900" }}
          >
            CODAL
          </Link>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link  home descriptions" to="/">
                  Employer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link   descriptions items"
                  id="#menu"
                >
                  Job seeker
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/project"
                  className="nav-link   descriptions items"
                  id="#menu"
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contactus"
                  className="nav-link   descriptions items"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contactus"
                  className="nav-link   descriptions item"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* hi and pics container starts from here */}
    </div>
  );
};
export default Navbar;
