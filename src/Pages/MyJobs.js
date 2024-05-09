import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../Layout/Layout";

export function MyJobs() {

const [jobsData, setJobsData] = useState([]);
const [amount, setAmount] = useState("");

function handleAmountChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setAmount(amount => {
      return {
        ...amount,
        [name]: value
      };
    });
  }

function handleCreateExpense(event){
    event.preventDefault();
    var url = "http://localhost:7181/api/Expenses";
      async function post() {
        const response = await fetch(url, {
          method: 'POST',
          //body: JSON.stringify({modelId: modelId, jobId: jobId, date: new Date, text: "", amount: amount}),
          credentials: 'include',
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
          },
        })

        if(response.ok)
        {
          console.log("den er inde i databasen");
        }
        else 
        {
          //setMessage("Failed to create job");
        }
      };
      
      post(); 
  }

useEffect(() => {
    
        var url = "http://localhost:7181/api/Jobs"
        async function fetchData() {
            const response = await fetch(url, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                },
            });

            if(response.ok)
                {
                    const jobsData = await response.json(); 
                    setJobsData(jobsData);
                }
                else
                {
                    console.log('Error job information')
                }
            };
            fetchData();
    }, []);

  
    return (
        <Layout>
            <Fragment>
                <h2> Job information </h2>

                {jobsData && jobsData.map((job, index) => (
                    <div key={index} style={{ border: "1px solid black", padding: "10px", marginBottom: "10px"}}>
                        <strong> Job Id:</strong> {job.jobId}<br/>
                        <strong> Customer :</strong> {job.customer}<br/>
                        <strong> Start date :</strong> {new Date(job.startDate).toLocaleDateString()}<br/>
                        <strong> Number of days :</strong> {job.days}<br/>
                        <strong> Location :</strong> {job.location}<br/>
                        <strong> Comments :</strong> {job.comments}<br/>

                        <form onSubmit={handleCreateExpense}>
                        <div>
                            <label> Add amount: </label>
                            <input name="amount" placeholder="Amount" autoFocus='true' onChange={handleAmountChange} /> 
                            <button type="button" onClick={handleCreateExpense}>
                                Create expense
                            </button>
                        </div>
                        </form>
                    </div>
                    
                ))}
                
            </Fragment>
        </Layout>
    );
}
