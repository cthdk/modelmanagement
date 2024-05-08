import { Fragment, useState } from "react";
import './Model.css';
import Layout from "./Layout";

export function Model() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    adressLine1: "",
    adressLine2: "",
    zipCode: "",
    city: "",
    country: "",
    birthdate: "",
    nationality: "",
    height: 0,
    shoeSize: 0,
    hairColor: "",
    eyeColor: "",
    comments: ""
  });
  //const [message, setMessage] = useState("");

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
    console.log(state)
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
          console.log("Model created")
          //setMessage("Model created successfully!");
        }
        else 
        {
          //setMessage("Failed to create model");
        }
      };
      
      post(); 

      setState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        adressLine1: "",
        adressLine2: "",
        zipCode: "",
        city: "",
        country: "",
      birthdate: "",
      nationality: "",
      height: 0,
      shoeSize: 0,
      hairColor: "",
      eyeColor: "",
      comments: ""
      });
  }

    return (
      <Layout>
          <Fragment>
        <h2> Model </h2>
        
        <div className="react-form">
        <form onSubmit={handleSubmit}>
          <div className="input-div">
            <label> First Name </label>
            <input name="firstName" placeholder="First Name" autoFocus='true' value={state.firstName} onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Last Name </label>
            <input name="lastName" placeholder="Last Name" value={state.lastName} onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Email </label>
            <input name="email" placeholder="Email" type='email' value={state.email} onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Phone Number </label>
            <input name="phoneNo" placeholder="Phone Number" type='tel' value={state.phoneNo} onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Address </label>
            <input name="adressLine1" placeholder="Address" value={state.adressLine1} onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label/>
            <input name="adressLine2" placeholder="Address" value={state.adressLine2} onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Zip Code</label>
            <input name="zipCode" placeholder="Zip Code" value={state.zipCode} onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > City </label>
            <input name="city" placeholder="City" value={state.city} onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Country </label>
            <input name="country" placeholder="Country" value={state.country} onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Birthdate </label>
            <input name="birthdate" placeholder="Birthdate" type='date' value={state.birthdate} onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Nationality </label>
            <input name="nationality" placeholder="Nationality" value={state.nationality} onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Height </label>
            <input name="height" placeholder="Height" value={state.height} onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Shoe Size </label>
            <input name="shoeSize" placeholder="Shoe Size" value={state.shoeSize} onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Hair Color </label>
            <input name="hairColor" placeholder="Hair Color" value={state.hairColor} onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Eye Color </label>
            <input name="eyeColor" placeholder="Eye Color" value={state.eyeColor} onChange={handleInputChange} />
          </div>

          <div className="input-div">
            <label > Comments </label>
            <textarea name="comments" placeholder="Comments" value={state.comments} onChange={handleInputChange} />
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