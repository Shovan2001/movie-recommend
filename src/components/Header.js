import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  selectUserName,
  setSignOutState,
  // selectUserEmail,
  // selectUserPhoto,
  // setUserLoginDetailser,
} from "../Slice/userSlice";
import { auth } from "../firebase";

export const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  console.log(userName);
  const logout = () => {
    if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Movies</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/watchlist">Watch List</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Add
              </Link>
            </li>
            {userName && (
              <li>
                <button onClick={logout} className="btn btn-primary">Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};
