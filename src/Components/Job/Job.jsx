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
      <p style={{ color: "#0c1a2a", fontSize: "1.2rem" }}>
        <b>{job.title}</b>
      </p>
      <NormalTextDiv>{job.company}</NormalTextDiv>
      <p>{job.country}</p>
    </Card>
  );
};

export default Job;
