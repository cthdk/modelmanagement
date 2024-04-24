import { Fragment } from "react";
import { useState } from "react";

export function Manager() {
  const [state, setState] = useState();

  function handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setState(state => {
      return {
        ...state,
        [name]: value
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    var url = "/create-new-manager";
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(state),
      credentials: 'include',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
        'Content-Type': 'application/json'
      }
    }).then(responseJson => {
      this.response = responseJson;
    })
    .catch(error => alert('Something bad happened: ' + error)); // TO DO: change  
  }

  return (
    <Fragment>
    <h2> Create new manager </h2>

    <div className="react-form">
      <form onSubmit={handleSubmit}>
        <div className="input-div">
          <label> First Name </label>
          <input name="firstName" placeholder="First Name" autoFocus='true' onChange={handleInputChange} />
        </div>

        <div className="input-div">
          <label> Last Name </label>
          <input name="lastName" placeholder="Last Name" onChange={handleInputChange} />
        </div>

        <div className="input-div">
          <label> Email </label>
          <input name="email" placeholder="Email" type='email' onChange={handleInputChange} />
        </div>

        <div className="input-div">
          <label> Password </label>
          <input name="password" placeholder="Password" type="password" onChange={handleInputChange} />
        </div>

        <div className="button-container">
              <button className="submit-button"> Create new manager </button>
        </div>

      </form>
    </div>
    </Fragment>
  )
}