import { Fragment } from "react";

export function Manager() {
  return (
    <Fragment>
    <h2> Create new manager </h2>

    <div className="react-form">
      <form>
        <div className="input-div">
          <label> First Name </label>
          <input placeholder="First Name" autoFocus='true' />
        </div>

        <div className="input-div">
          <label> Last Name </label>
          <input placeholder="Last Name" />
        </div>

        <div className="input-div">
          <label> Email </label>
          <input placeholder="Email" type='email' />
        </div>

        <div className="input-div">
          <label> Password </label>
          <input placeholder="Password" type="password" />
        </div>

        <div className="button-container">
              <button className="submit-button"> Create new manager </button>
        </div>

      </form>
    </div>
    </Fragment>
  )
}