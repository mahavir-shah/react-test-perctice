import React from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <>
      {/* <Link to="/signIn">
        <button type="button" className="btn btn-danger">
          Sign In
        </button>
      </Link>
      &nbsp;&nbsp;&nbsp; */}
      <Link to="/">
        <button type="button" className="btn btn-danger">
          SignUp With Google
        </button>
      </Link>
      &nbsp;&nbsp;&nbsp;
      {/* <Link to="/redux-state">
        <button type="button" className="btn btn-success">
          State Management
        </button>
      </Link>
      &nbsp;&nbsp;&nbsp; */}
      <Link to="/cropper">
        <button type="button" className="btn btn-danger">
          Cropper Demo
        </button>
      </Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/google-pay">
        <button type="button" className="btn btn-danger">
          Google Pay
        </button>
      </Link>
      <br />
    </>
  );
};
export default HomePage;
