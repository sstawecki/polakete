import React from 'react'
import {Link} from 'react-router-dom';

const NotFound = () => {

  return (
    <div className="not-found-container">
      <h1>Page not found</h1>
      <div className="not-found-info">
        <p>We are sorry but the page you are looking for does not exist.</p>
        <p>Go back to <Link to={'/'}>home page</Link></p>
      </div>
    </div>
  );
};

export default NotFound;