import { Fragment, useState, useEffect } from "react";
import Layout from "./Layout";
import './Manager.css';

export function Manager() {
  const [state, setState] = useState();
  const [managers, setManagers] = useState([]);
  //const [message, setMessage] = useState("");

  useEffect(() => {
    var url = "http://localhost:7181/api/Managers";
    async function getManagers() {
      const response = await fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
          'Content-Type': 'application/json'
        },
      })
  
      if(response.ok)
        {
          setManagers(await response.json());
        }
    }
  
    getManagers();
  }, []);

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
    var url = "http://localhost:7181/api/Managers";
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
          console.log("Manager created")
          //setMessage("Manager created successfully!");
        }
        else 
        {
          //setMessage("Failed to create manager");
        }
      };
      
      post(); 
  }

  return (
    <Layout>
<Fragment>
    <h2> Create a new manager </h2>

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

    <h2 className="subheader"> All managers </h2>
      <div className="list-container">
        {managers && managers.map(manager => (
          <div className="items-list">
            <label className="item-title"> {manager.firstName} {manager.lastName} </label>
            <label className="item-description"> , {manager.email} </label>
          </div>
        ))}
      </div>

    </Fragment>
    </Layout>
  )
}