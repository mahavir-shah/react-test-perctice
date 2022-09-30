import React from 'react';
import { Link } from 'react-router-dom';
const HeaderComponent = () => {
  return (
    <>
      <div class="col-md-12 bg-info">
        <Link to="/">
          <button type="button" className="btn btn-success">
            Home
          </button>
        </Link>
      </div>
    </>
  );
};
export default HeaderComponent;
