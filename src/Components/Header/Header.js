import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContexts";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);

  return (
    <nav className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      {user?.email && (
        <span className="welcome">WelCome back {user.email}</span>
      )}
      <div>
        <Link to="/">Shop</Link>
        <Link to="./orders">Order</Link>
        <Link to="./inventory">Manage Inventory</Link>
        <Link to="/shipping">Shipping</Link>
        {user?.uid ? (
          <button className="bln-logout" onClick={logOut}>
            Logout
          </button>
        ) : (
          <>
            <Link to="./signin">Log In</Link>
            <Link to="./signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
