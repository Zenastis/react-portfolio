import React from "react";
import { Link, useLocation } from "react-router-dom";


function Navigation() {

      const location = useLocation();


      return (
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/Home" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/aboutme"
              className={location.pathname === "/aboutme" ? "nav-link active" : "nav-link"}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contactme"
              className={location.pathname === "/contactme" ? "nav-link active" : "nav-link"}
            >
              Contact Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
            >
              Projects
            </Link>
          </li>
          
        </ul>
        
      );
    }
    
    export default Navigation;