import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
// import { jwtDecode } from "jwt-decode";
import { Layout } from "../Layout/Layout";
import ExpenseItem from "../Components/ExpenseItem";

export function MyJobs() {

const [jobsData, setJobsData] = useState([]);
// const [expense, setExpense] = useState({
//   modelId: jwtDecode(localStorage.getItem("token")).ModelId,
//   jobId: 0,
//   date: new Date(),
//   text: "",
//   amount: ""
// });

// function handleAmountChange(event) {
//     const target = event.target;
//     const name = target.name;
//     const value = target.value;

//     // setExpense(expense => {
//     //   return {
//     //     ...expense,
//     //     [name]: value
//     //   };
//     // });
//   }



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
                    <ExpenseItem job={job} index={index}/>
                ))}
            </Fragment>
        </Layout>
    );
}
