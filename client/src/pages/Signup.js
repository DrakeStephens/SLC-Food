import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,  
        email: formState.email, password: formState.password
      }
    });
    console.log(error)
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="card p-5 m-5">
      <Link to="/login">
        ← Go to Login
      </Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        {/* <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            className="form-control"
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            className="form-control"
            placeholder="username"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            className="form-control"
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className="btn-warning btn">
            Submit
          </button>
        </div>
      </form>
      {error && <div>Sign up failed</div>}
    </div>
  );

}

export default Signup;
