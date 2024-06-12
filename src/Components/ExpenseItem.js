import { useState } from "react"
import { jwtDecode } from "jwt-decode";

const ExpenseItem = ({job, index}) => {

    const [expense, setExpense] = useState({
        amount: 0,
        text: "",
        jobId: 0,
        modelId: jwtDecode(localStorage.getItem("token")).ModelId,
        date: new Date()
    })

    function handleCreateExpense(event){
        event.preventDefault();
        var url = "http://localhost:7181/api/Expenses";
        expense.jobId = job.efjobid
        console.log(expense)
          async function post() {
            const response = await fetch(url, {
              method: 'POST',
              body: JSON.stringify(expense),
              credentials: 'include',
              headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'application/json'
              },
            })
    
            if(response.ok)
            {
              console.log("Created expensive");
            }
          };
          
          post(); 
    
          setExpense({
            text: "",
            amount: ""
        });
      }

    const handleAmountChange = (event) => {
        const {name, value} = event.target;
        setExpense((prevData) => ({
            ... prevData,
            [name]: value,
        }));
    }

    return (
        <div className="datamap" key={index} style={{ border: "1px solid black", padding: "10px", marginBottom: "10px"}}>
                        <strong> Job Id:</strong> {job.jobId}<br/>
                        <strong> Customer :</strong> {job.customer}<br/>
                        <strong> Start date :</strong> {new Date(job.startDate).toLocaleDateString()}<br/>
                        <strong> Number of days :</strong> {job.days}<br/>
                        <strong> Location :</strong> {job.location}<br/>
                        <strong> Comments :</strong> {job.comments}<br/>

                        <form onSubmit={handleCreateExpense}>
                        <div className="handlecreateexpense">
                            <label className="amountstyle"> Add an amount to the job: </label> <br/>
                            <label> Add amount: </label>
                            <input name="amount" placeholder="Amount" autoFocus='true' value={expense.amount} onChange={handleAmountChange} /> <br/>
                            <label> Enter text: </label>
                            <input name="text" placeholder="Text" autoFocus='true' value={expense.text} onChange={handleAmountChange} />
                            <button type="button" onClick={handleCreateExpense}>
                                Create expense
                            </button>
                        </div>
                        </form>
                    </div>
    )
}

export default ExpenseItem