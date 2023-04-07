import { React, useContext } from "react";
import { AuthContext } from "./Context";
import "../Components/Nav.css";

const Nav = (props) => {
  const { setisloggedin } = useContext(AuthContext);
  return (
    <div className="nav">
      <div>
        <h2>Context login page</h2>
      </div>
      <div className="links">
        <span>Home</span>
        <span>Product</span>
        <span>Support</span>
        <button
          onClick={() => {
            setisloggedin(false);
          }}
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Nav;
