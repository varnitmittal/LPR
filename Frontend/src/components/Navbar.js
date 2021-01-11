import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="mycss-nbar">
          <span>
            <a style={{ color:'#ffffff' }} href="/">License Plate Recognition System</a>
          </span>
      </nav>
    );
  }
}

export default Navbar;