import { Fragment, useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import './Manager.css';
import ApiRequest from "../Api/ApiRequest";

export function Manager() {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  const [newManager, setNewManager] = useState(initialState);
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    async function getManagers() {
      const managers = await ApiRequest(`/Managers`, 'GET')
      setManagers(managers);
    }
  
    getManagers();
  }, [managers]);

  function handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setNewManager(previousState => ({
        ...previousState,
        [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    async function postManager() {
      await ApiRequest(`/Managers`, 'POST', newManager);
    };
      
      postManager(); 
      setNewManager(initialState);
  }

  return (
    <Layout>
    <Fragment>
    <h2> Create a new manager </h2>

    <div className="react-form">
      <form onSubmit={handleSubmit}>
        <div className="input-div">
          <label> First Name </label>
          <input name="firstName" placeholder="First Name" autoFocus={true} value={newManager.firstName} onChange={handleInputChange} />
        </div>

        <div className="input-div">
          <label> Last Name </label>
          <input name="lastName" placeholder="Last Name" value={newManager.lastName} onChange={handleInputChange} />
        </div>

        <div className="input-div">
          <label> Email </label>
          <input name="email" placeholder="Email" type='email' value={newManager.email} onChange={handleInputChange} />
        </div>

        <div className="input-div">
          <label> Password </label>
          <input name="password" placeholder="Password" type="password" value={newManager.password} onChange={handleInputChange} />
        </div>

        <div className="button-container">
              <button className="submit-button"> Create new manager </button>
        </div>
      </form>
    </div>

    <h2 className="subheader"> All managers </h2>
      <div className="list-container">
        {managers && managers.map(manager => (
          <div key={manager.efManagerId} className="items-list">
            <label className="item-title"> {manager.firstName} {manager.lastName} </label>
            <label className="item-description"> , {manager.email} </label>
          </div>
        ))}
      </div>

    </Fragment>
    </Layout>
  )
}