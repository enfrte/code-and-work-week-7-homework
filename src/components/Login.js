import React from 'react';

function Login() {
  return (
    <div className="deposit container">
      <form>
          <h3 className="mb-3">Sign In</h3>

          <div className="form-group">
              <input type="text" className="form-control" placeholder="Enter username" />
          </div>

          <div className="form-group">
              <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-md-6">
                <button type="submit" className="btn btn-success btn-block mt-2 mb-2">Submit</button>
              </div>
              <div className="col-md-6">
                <a class="btn btn-primary btn-block mt-2" href="/" role="button">Register</a>
              </div>
            </div>
          </div>

      </form>

    </div>
  );
}

export default Login;
