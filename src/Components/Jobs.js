import { Fragment, useState, useEffect } from "react";
import Layout from "./Layout";
import './Jobs.css';

export function Jobs() {
  const [state, setState] = useState({
    customer: "",
    startDate: "",
    days: "",
    location: "",
    comments: "",
    model: ""
  });
  const [models, setModels] = useState([]);
  const [jobs, setJobs] = useState([]);
  //const [message, setMessage] = useState("");

  useEffect(() => {
    var url = "http://localhost:7181/api/Models";
      async function getModels() {
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
          const data = await response.json();
          setModels(data);
        }
      }

      getModels(); 
  }, []);

  useEffect(() => {
  var url = "http://localhost:7181/api/Jobs";
  async function getJobs() {
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
        const data = await response.json();
        setJobs(data);
        console.log(data);
      }
  }

  getJobs();
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
    var url = "http://localhost:7181/api/Jobs";
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
          //setMessage("Job created successfully!");
        }
        else 
        {
          //setMessage("Failed to create job");
        }
      };
      
      post();
      
      setState({
        customer: "",
        startDate: "",
        days: "",
        location: "",
        comments: "",
        model: ""
    });
  }

  function deleteModelFromJob(id) {
    var url = `http://localhost:7181/api/Models/${id}`;
    async function delete_() {
      const response = await fetch(url, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
          'Content-Type': 'application/json'
        },
      });

      if(response.ok)
      {
        console.log("Model removed from job");
      }
    }

    delete_();
  }
    
    return (
      <Layout>
          <Fragment>
        <h2> Create a new job </h2>
        
        <div className="react-form">
        <form onSubmit={handleSubmit}>
            <div className="input-div">
              <label> Customer </label>
              <input name="customer" placeholder="Customer" autoFocus='true' value={state.customer} onChange={handleInputChange} />
            </div>

            <div className="input-div">
              <label > Start Date </label>
              <input name="startDate" placeholder="Start Date" type='date' value={state.startDate} onChange={handleInputChange} />
            </div>

            <div className="input-div">
              <label > Days </label>
              <input name="days" placeholder="Days" value={state.days} onChange={handleInputChange} />
            </div>
          
            <div className="input-div">
              <label > Location </label>
              <input name="location" placeholder="Location" value={state.location} onChange={handleInputChange} />
            </div>

            <div className="input-div">
              <label > Comments </label>
              <textarea name="comments" placeholder="Comments" value={state.comments} onChange={handleInputChange} />
            </div>

            <div className="input-div">
              <label>Model</label>
              <select name="model" className="dropdown-menu" value={state.model}>
                <option value=""> Select a model</option>
                {models && models.map(model => (
                  <option key={model.efModelId} value={model.efModelId}>
                    {model.efModelId} {model.firstName} {model.lastName}
                  </option>
                ))}
              </select>
            </div>

            <div className="button-container">
              <button className="submit-button"> Create a new job </button>
            </div>

        </form>
        </div>

        <h2 className="subheader"> All jobs </h2>

        <div className="jobs-container">
          {jobs && jobs.map(job => (
            <button className="jobs-list">
              <label className="job-title"> {job.jobId} {job.customer} </label>
              <label className="item-description"> , {job.location} </label>
            </button>
          ))}
        </div>

      </Fragment>
      </Layout>
    )
}