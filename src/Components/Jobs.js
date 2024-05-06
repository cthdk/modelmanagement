import { Fragment } from "react";
import Layout from "./Layout";

export function Jobs() {
    
    return (
      <Layout>
          <Fragment>
        <h2> Create new job </h2>
        
        <div className="react-form">
        <form>
            <div className="input-div">
              <label> Customer </label>
              <input name="customer" placeholder="Customer" autoFocus='true' />
            </div>

            <div className="input-div">
              <label > Start Date </label>
              <input name="startDate" placeholder="Start Date" type='date' />
            </div>

            <div className="input-div">
              <label > Days </label>
              <input name="days" placeholder="Days" />
            </div>
          

            <div className="input-div">
              <label > Location </label>
              <input name="location" placeholder="Location" />
            </div>

            <div className="input-div">
              <label > Comments </label>
              <textarea name="comments" placeholder="Comments"/>
            </div>

            <div className="input-div">
              <label>Model</label>
              <select name="model">
                <option value="pending">Pending</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
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