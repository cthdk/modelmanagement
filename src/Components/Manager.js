import { Fragment } from "react";

export function Manager() {

    return (
      <Fragment>
        <h2> Create new manager </h2>

      <div className="react-form">
      <form className="">
          <div className="input-div">
            <label> First Name </label>
            <input placeholder="First name" autoFocus='true' />
          </div>

          <div className="input-div">
            <label> Last Name </label>
            <input placeholder="Last name" autoFocus='true' />
          </div>

          <div className="input-div">
            <label> Email </label>
            <input placeholder="Email" autoFocus='true' />
          </div>

          <div className="input-div">
            <label> Password </label>
            <input placeholder="Password" autoFocus='true' />
          </div>

          </form>
        </div>
      </Fragment>
    )
}