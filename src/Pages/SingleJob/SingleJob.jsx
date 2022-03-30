import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleJob = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios.get("data.json").then((res) => {
      setJobs(res.data);
    });
  }, []);

  console.log(typeof params.id);

  const singleJob = jobs.find((job) => job.id === +params.id);

  console.log(singleJob);

  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id}>{job.title}</div>
      ))}
    </div>
  );
};

export default SingleJob;
