import { Fragment, useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { TableItem } from "../Components/TableItem";
import { ListItem } from "../Components/ListItem";
import { ApiRequest } from "../Api/ApiRequest";

export function JobDetails () {
  let { jobId } = useParams();

  const [job, setJob] = useState([]);

  useEffect(() => {
    async function getJobById() {
    const jobDetails = await ApiRequest(`/Jobs/${jobId}`);
    setJob(jobDetails);
    }
      
      getJobById();
    }, [job]);

  async function deleteModelFromJob(jobId, firstName, lastName) {
    const models = await ApiRequest("/Models", 'GET');
    const modelToDelete = models.find(model => model.firstName === firstName && model.lastName === lastName);

    await ApiRequest(`/Jobs/${jobId}/model/${modelToDelete.efModelId}`, 'DELETE')
  }

  return (
    <Layout>
      <Fragment>
        <h2> {job.jobId} {job.customer} </h2>
          
          <ListItem label="Start date:" value={job.startDate} />
          <ListItem label="Days:" value={job.days} />
          <ListItem label="Location:" value={job.location} />
          <ListItem label="Comments:" value={job.comments} />

          {job.models && job.models.length > 0 && (
              <div>
                  {job.models.map((model, index) => (
                    <TableItem key={index} 
                               label={`${model.firstName} ${model.lastName}`} 
                               value={`Email: ${model.email}, Phone: ${model.phoneNo}`} 
                               buttonText="Remove model"
                               buttonClick={() => deleteModelFromJob(job.jobId, model.firstName, model.lastName)}/>
                  ))}
              </div>
            )}

      </Fragment>
    </Layout>
  )
}