import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <header className="navBox">
      <nav className="navLinkBox">
        <ul className="listNav">
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "#353535" : "#f9fafb",
                  backgroundColor: isActive ? "#f9fafb" : "",
                  borderBottom: isActive ? "4px solid #16a34a" : "",
                };
              }}
              to={"/about"}
            >
              لیست
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "#353535" : "#f9fafb",
                  backgroundColor: isActive ? "#f9fafb" : "",
                  borderBottom: isActive ? "4px solid #16a34a" : "",
                };
              }}
              to={"/"}
            >
              دفتر تماس
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "#353535" : "#f9fafb",
                  backgroundColor: isActive ? "#f9fafb" : "",
                  borderBottom: isActive ? "4px solid #16a34a" : "",
                };
              }}
              to={"/profile"}
            >
              رزومه من
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
