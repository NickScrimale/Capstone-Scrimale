import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export const NavBar = ({ clearUser, isAuthenticated }) => {
  const history = useNavigate()

  const handleLogout = () => {
      clearUser();
      history('/');
  }

  return (
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills nav-fill">
          <li className="navbar__item">
              <Link className="navbar__link" to="/"> Home </Link>
          </li>
          {isAuthenticated
              ? <li className="navbar__item">
                  <Link className="navbar__link" to="/trivia"> Friends </Link>
              </li>
              : null}
          {isAuthenticated
              ? <li className="navbar__item">
                  <Link className="navbar__link" to="/messages"> Messages </Link>
              </li>
              : null }
          {isAuthenticated
              ? <li className="navbar__item">
                  <Link className="navbar__link" to="/tasks"> Tasks </Link>
              </li>
              : null}
          {isAuthenticated
              ? <li className="navbar__item">
                  <Link className="navbar__link" to="/events"> Events </Link>
              </li>
              : null}
          {isAuthenticated
              ? <li className="navbar__item">
                  <span className="navbar__link" onClick={handleLogout}> Logout </span>
              </li>
              : null}
      </ul>
      </nav>
  );
};