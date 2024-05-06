import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "./Layout";

export function MyJobs() {

const [jobsData, setJobsData] = useState([]);

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
                    console.log(jobsData)

                }
                else
                {
                    console.log('din bare røv')
                }
            };
            fetchData();
    }, []);

  
    return (
        <Layout>
            <Fragment>
                <h2> My job information </h2>

                {jobsData && jobsData.map((job, index) => (
                    <div key={index}>
                        <strong> Job Id:</strong> {job.jobId}<br/>
                        <strong> Customer :</strong> {job.customer}<br/>
                        <strong> Start date :</strong> {new Date(job.startDate).toLocaleDateString()}<br/>
                        <strong> Number of days :</strong> {job.days}<br/>
                        <strong> Location :</strong> {job.location}<br/>
                        <strong> Comments :</strong> {job.comments}<br/>
                    </div>
                ))} 
                
        </Fragment>
        </Layout>
    );
}
