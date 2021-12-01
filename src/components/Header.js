import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";


const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <h1>SnapShot</h1>
      <span className="p" role="img" aria-labelledby="camera">📸</span>
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};

export default Header;
