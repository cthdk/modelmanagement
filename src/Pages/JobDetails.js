import { Fragment, useState, useEffect } from "react";
import { Layout } from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { TableItem } from "../Components/TableItem";
import { ListItem } from "../Components/ListItem";
import { ApiRequest } from "../Api/ApiRequest";

export function JobDetails () {
  let { jobId } = useParams();

  const [job, setJob] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedModelId, setSelectedModelId] = useState("");

  useEffect(() => {
    async function getJobById() {
    const jobDetails = await ApiRequest(`/Jobs/${jobId}`);
    setJob(jobDetails);

    const models = await ApiRequest(`/Models`, 'GET');
    setModels(models);
    }
      
      getJobById();
    }, [job]);

  async function deleteModelFromJob(firstName, lastName) {
    const selectedModel = models.find(model => model.firstName === firstName && model.lastName === lastName);
    await ApiRequest(`/Jobs/${jobId}/model/${selectedModel.efModelId}`, 'DELETE')
  }

  const handleModelSelected = (event) => {
    setSelectedModelId(event.target.value);
  };

  async function addModelToJob() {
    //const selectedModel = await ApiRequest(`/Models/${selectedModelId}`, 'GET');

    //await ApiRequest(`/Jobs${jobId}/model/${selectedModelId}`, 'POST', jobModel);
  }

  return (
    <Layout>
      <Fragment>
        <div className="page-content">
          <h2> {job.jobId} {job.customer} </h2>
          
          <div className="details-list">
            <ListItem label="Start date:" value={job.startDate} />
            <ListItem label="Days:" value={job.days} />
            <ListItem label="Location:" value={job.location} />
            <ListItem label="Comments:" value={job.comments} />
          </div>

          {job.models && job.models.length > 0 && (
              <div>
                  {job.models.map((model, index) => (
                    <TableItem key={index} 
                               label={`${model.firstName} ${model.lastName}`} 
                               value={`${model.email}, ${model.phoneNo}`} 
                               buttonText="Remove model"
                               buttonClick={() => deleteModelFromJob(model.firstName, model.lastName)} />
                  ))}
              </div>
            )}
 
        <h3 className="subsubheader seperator"> Add model to job </h3>

        <div className="dropdown-container">
          <select name="model" className="dropdown-menu small-dropdown" value={selectedModelId} onChange={handleModelSelected}>
            <option value=""> Select a model </option>
            {models && models.map(model => (
            <option key={model.efModelId} value={model.efModelId}>
            {model.efModelId} {model.firstName} {model.lastName}
            </option>
            ))}
          </select>
          <button className="submit-button small-button"
                  onClick={addModelToJob}> Add model </button>
        </div>
        </div>
      </Fragment>
    </Layout>
  )
}