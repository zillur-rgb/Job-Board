import React from "react";
import Job from "../Job/Job";
import { CardContainer } from "./Jobs.style";

const Jobs = ({ jobs }) => {
  return (
    <CardContainer>
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </CardContainer>
  );
};

export default Jobs;
