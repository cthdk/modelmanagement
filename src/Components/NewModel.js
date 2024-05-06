import { Fragment, useState } from "react";
import './NewModel.css';
import Layout from "./Layout";

export function NewModel() {

    return (
      <Layout>
          <Fragment>
        <h2> Create new model </h2>
        
        <div className="react-form">
        <form>
          <div className="input-div">
            <label> First Name </label>
            <input name="fistName" placeholder="First Name" autoFocus='true' />
          </div>

          <div className="input-div">
            <label > Last Name </label>
            <input name="lastName" placeholder="Last Name" />
          </div>

          <div className="input-div">
            <label > Email </label>
            <input name="email" placeholder="Email" type='email' />
          </div>

          <div className="input-div">
            <label > Phone Number </label>
            <input name="phoneNo" placeholder="Phone Number" type='tel' />
          </div>

          <div className="input-div">
            <label > Address </label>
            <input name="adressLine1" placeholder="Address" />
          </div>

          <div className="input-div">
            <label/>
            <input name="adressLine2" placeholder="Address" />
          </div>

          <div className="input-div">
            <label > Zip Code</label>
            <input name="zipCode" placeholder="Zip Code" />
          </div>

          <div className="input-div">
            <label > City </label>
            <input name="city" placeholder="City"/>
          </div>

          <div className="input-div">
            <label > Country </label>
            <input name="country" placeholder="Country"/>
          </div>

          <div className="input-div">
            <label > Birthdate </label>
            <input name="birthdate" placeholder="Birthdate" type='date' />
          </div>

          <div className="input-div">
            <label > Nationality </label>
            <input name="nationality" placeholder="Nationality"/>
          </div>

          <div className="input-div">
            <label > Height </label>
            <input name="height" placeholder="Height"/>
          </div>

          <div className="input-div">
            <label > Shoe Size </label>
            <input name="shoeSize" placeholder="Shoe Size"/>
          </div>

          <div className="input-div">
            <label > Hair Color </label>
            <input name="hairColor" placeholder="Hair Color"/>
          </div>

          <div className="input-div">
            <label > Eye Color </label>
            <input name="eyeColor" placeholder="Eye Color"/>
          </div>

          <div className="input-div">
            <label > Comments </label>
            <textarea name="comments" placeholder="Comments"/>
          </div>

          <div className="button-container">
            <button className="submit-button"> Create new model </button>
          </div>

        </form>
        </div>
      </Fragment>
      </Layout>
        
    )
}