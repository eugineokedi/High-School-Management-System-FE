import React from 'react';
import landindpageschoolimg from '../../assets/landindpageschoolimg.jpeg'
// import './LandingPage.css';

function LandingPage() {
  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-success">
      <div className="row w-100">
        {/* Left Section */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center border-end">
          <h1 className="text-center mb-4">School Management System</h1>
          <div className="image-placeholder bg-secondary text-white d-flex justify-content-center align-items-center">
           <img src={landindpageschoolimg} alt='school' style={{ maxWidth: '100%', maxHeight: '100%' }} />

          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h2 className="mb-4">Log In As</h2>
          <div className="d-flex flex-column gap-3">
            <button className="btn btn-primary btn-lg">Student</button>
            <button className="btn btn-primary btn-lg">Teacher</button>
            <button className="btn btn-primary btn-lg">Parent</button>
            <button className="btn btn-primary btn-lg">Non-Teaching Staff</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
