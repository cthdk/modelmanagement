import { Fragment, useState, useEffect } from "react";
import Layout from "./Layout";

export function Jobs() {
  const [state, setState] = useState();
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
      };

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
          }
      };
      
      getModels(); 
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
              <select name="model">
                <option value="">Select a Model</option>
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