import { Fragment } from "react";
import Layout from "../Layout/Layout";

export function Home() {      
    return (
        <Layout> 
            <Fragment>
                <h1> Welcome </h1>
                <label> This is the homepage of the model management. Navigate to the other pages to view and create models, managers and jobs.</label>
            </Fragment>
        </Layout>
    )
}