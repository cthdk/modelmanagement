import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import './Jobs.css';
import ApiRequest from "../Api/ApiRequest";

export function Jobs() {
  const initialState = {
    customer: "",
    startDate: "",
    days: "",
    location: "",
    comments: "",
    model: ""
  };
  const [newJob, setNewJob] = useState(initialState);
  const [models, setModels] = useState([]);
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getModels() {
      const models = await ApiRequest(`/Models`, 'GET');
      setModels(models);
    }

      getModels(); 
  }, []);

  useEffect(() => {
  async function getJobs() {
    const jobs = await ApiRequest(`/Jobs`, 'GET');
    setJobs(jobs);
  }

    getJobs();
  }, [jobs]);

  function handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setNewJob(previousState => {
      return {
        ...previousState,
        [name]: value
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

      async function postJob() {
        await ApiRequest(`/Jobs`, 'POST', newJob);
      }
      
      postJob(); 
      setNewJob(initialState);
  }

  const goToJobDetails = (jobId) => {
    navigate(`/jobs/${jobId}`);
  }
    
    return (
      <Layout>
          <Fragment>
        <h2> Create a new job </h2>
        
        <div className="react-form">
        <form onSubmit={handleSubmit}>
            <div className="input-div">
              <label> Customer </label>
              <input name="customer" placeholder="Customer" autoFocus={true} value={newJob.customer} onChange={handleInputChange} />
            </div>

            <div className="input-div">
              <label > Start Date </label>
              <input name="startDate" placeholder="Start Date" type='date' value={newJob.startDate} onChange={handleInputChange} />
            </div>

            <div className="input-div">
              <label > Days </label>
              <input name="days" placeholder="Days" value={newJob.days} onChange={handleInputChange} />
            </div>
          
            <div className="input-div">
              <label > Location </label>
              <input name="location" placeholder="Location" value={newJob.location} onChange={handleInputChange} />
            </div>

            <div className="input-div">
              <label > Comments </label>
              <textarea name="comments" placeholder="Comments" value={newJob.comments} onChange={handleInputChange} />
            </div>

            <div className="input-div">
              <label>Model</label>
              <select name="model" className="dropdown-menu" value={newJob.model}>
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
            <button key={job.jobId}
                    className="jobs-list" 
                    onClick={() => goToJobDetails(job.jobId)}>
              <label className="job-title"> {job.jobId} {job.customer} </label>
              <label className="item-description"> , {job.location} </label>
            </button>
          ))}
        </div>

      </Fragment>
      </Layout>
    )
}