import { Fragment } from "react";
import './Model.css';

export function Model() {
    
    return (
        <Fragment>
        <h2> Create new model </h2>
        
        <div className="react-form">
        <form className="">
            <div className="input-div">
              <label> First Name </label>
              <input placeholder="First name" />
            </div>

            <div className="input-div">
              <label > Last Name </label>
              <input placeholder="Last name" />
            </div>

            <div className="input-div">
              <label > Email </label>
              <input placeholder="Email" />
            </div>

            <div className="input-div">
              <label > Phone Number </label>
              <input placeholder="Phone Number" />
            </div>

            <div className="input-div">
              <label > Address </label>
              <input placeholder="Address"/>
            </div>

            <div className="input-div">
              <label/>
              <input placeholder="Address"/>
            </div>

            <div className="input-div">
              <label > Zip Code</label>
              <input placeholder="Zip Code"/>
            </div>

            <div className="input-div">
              <label > City </label>
              <input placeholder="City"/>
            </div>

            <div className="input-div">
              <label > Country </label>
              <input placeholder="Country"/>
            </div>

            <div className="input-div">
              <label > Birthdate </label>
              <input placeholder="Birthdate"/>
            </div>

            <div className="input-div">
              <label > Nationality </label>
              <input placeholder="Nationality"/>
            </div>

            <div className="input-div">
              <label > Height </label>
              <input placeholder="Height"/>
            </div>

            <div className="input-div">
              <label > Shoe Size </label>
              <input placeholder="Shoe Size"/>
            </div>

            <div className="input-div">
              <label > Hair Color </label>
              <input placeholder="Hair Color"/>
            </div>

            <div className="input-div">
              <label > Eye Color </label>
              <input placeholder="Eye Color"/>
            </div>

            <div className="input-div">
              <label > Comments </label>
              <textarea placeholder="Comments"/>
            </div>

        </form>
        </div>
      </Fragment>
    )
}