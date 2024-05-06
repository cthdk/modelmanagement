import { Fragment, useState } from "react";
import './Model.css';
import Layout from "./Layout";

export function Model() {
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
    var url = "http://localhost:7181/api/Models";
      async function post() {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(state),
          credentials: 'include',
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
          },
        })

        if(response.ok)
        {
          console.log("Model created successfully!");
        }
        else 
        {
          console.error("Failed to create model.");
        }
      };
      
      post(); 
  }
export function Model() {

    return (
      <Layout>
          <Fragment>
        <h2> Create new model </h2>
        
        <div className="react-form">
        <form onSubmit={handleSubmit}>
          <div className="input-div">
            <label> First Name </label>
            <input name="fistName" placeholder="First Name" autoFocus='true' onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Last Name </label>
            <input name="lastName" placeholder="Last Name" onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Email </label>
            <input name="email" placeholder="Email" type='email' onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Phone Number </label>
            <input name="phoneNo" placeholder="Phone Number" type='tel' onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Address </label>
            <input name="adressLine1" placeholder="Address" onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label/>
            <input name="adressLine2" placeholder="Address" onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Zip Code</label>
            <input name="zipCode" placeholder="Zip Code" onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > City </label>
            <input name="city" placeholder="City" onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Country </label>
            <input name="country" placeholder="Country" onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Birthdate </label>
            <input name="birthdate" placeholder="Birthdate" type='date' onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Nationality </label>
            <input name="nationality" placeholder="Nationality" onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Height </label>
            <input name="height" placeholder="Height" onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Shoe Size </label>
            <input name="shoeSize" placeholder="Shoe Size" onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Hair Color </label>
            <input name="hairColor" placeholder="Hair Color" onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Eye Color </label>
            <input name="eyeColor" placeholder="Eye Color" onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Comments </label>
            <textarea name="comments" placeholder="Comments" onChange={handleInputChange} />
          </div>

          <div className="button-container">
            <button className="submit-button"> Model </button>
          </div>

        </form>
        </div>
      </Fragment>
      </Layout>
        
    )
}