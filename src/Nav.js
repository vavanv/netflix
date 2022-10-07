import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className="nav">
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://www.product-reviews.net/down/wp-content/uploads/2020/03/netflixlogo.png"
          alt=""
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
        <h1>This is the nav</h1>
      </div>
    </div>
  );
}

export default Nav;
