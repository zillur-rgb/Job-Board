import React from "react";
import { Card, NormalTextDiv } from "./Job.style";

const Job = ({ job }) => {
  console.log(job);
  return (
    <Card>
      <NormalTextDiv>
        <p>{job.posted} ago</p>
        <div>
          <b>-</b>
        </div>
        <p>{job.jobtype}</p>
      </NormalTextDiv>
      <p>
        <b>{job.title}</b>
      </p>
      <p>{job.company}</p>
      <p>{job.country}</p>
    </Card>
  );
};

export default Job;
