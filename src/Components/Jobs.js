import { Fragment, useState, useEffect } from "react";
import Layout from "./Layout";

export function Jobs() {
  const [models, setModels] = useState([]);

  const [jobs, setJobs] = useState({
    customer: "",
    startDate: "",
    days: "",
    location: "",
    comments: "",
    models: [] 
  });

  function handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    let selectedModels = [];

    if (target.selectedOptions && target.selectedOptions.length > 0) {
        selectedModels = Array.from(target.selectedOptions, option => option.value);
    }
    
    setJobs(jobs => ({
      ...jobs,
      models: selectedModels
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    var url = "http://localhost:7181/api/jobs";
    console.log(jobs)
    async function post() {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(jobs),
        credentials: 'include',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        console.log("Job created successfully!");
      } else {
        console.log("Failed to create job");
      }
    };

    post();
  }

  useEffect(() => {
    var url = "http://localhost:7181/api/Models";
    async function get() {
      const response = await fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
          'Content-Type': 'application/json'
        },
      })

      if (response.ok) {
        const models = await response.json();
        setModels(models);
      }
    };

    get();
  }, []);

  return (
    <Layout>
      <Fragment>
        <h2> Jobs </h2>

        <div className="react-form">
          <form onSubmit={handleSubmit}>
            <div className="input-div">
              <label> Customer </label>
              <input name="customer" placeholder="Customer" autoFocus='true' onChange={handleInputChange} />
            </div>

            <div className="input-div">
              <label > Start Date </label>
              <input name="startDate" placeholder="Start Date" type='date' onChange={handleInputChange} />
            </div>

            <div className="input-div">
              <label > Days </label>
              <input name="days" placeholder="Days" onChange={handleInputChange} />
            </div>

            <div className="input-div">
              <label > Location </label>
              <input name="location" placeholder="Location" onChange={handleInputChange} />
            </div>

            <div className="input-div">
              <label > Comments </label>
              <textarea name="comments" placeholder="Comments" onChange={handleInputChange} />
            </div>

            <div className="input-div">
              <label>Model</label>
              <select name="models" multiple onChange={handleInputChange}>
  {models && models.map(model => (
    <option key={model.efModelId} value={model.efModelId}>
      {model.efModelId} {model.firstName} {model.lastName}
    </option>
  ))}
</select>
            </div>

            <div className="button-container">
              <button className="submit-button"> Create new job </button>
            </div>

          </form>
        </div>
      </Fragment>
    </Layout>
  )
}
