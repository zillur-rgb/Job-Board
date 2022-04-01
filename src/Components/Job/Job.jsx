import React from "react";
import { AllLinks } from "../Jobs/Jobs.style";
import { Card, NormalTextDiv } from "./Job.style";

const Job = ({ job }) => {
  return (
    <AllLinks to={`/${job.id}`}>
      <Card>
        <NormalTextDiv>
          <p>{job.posted} ago</p>
          <div>
            <b>-</b>
          </div>
          <p>{job.jobtype}</p>
        </NormalTextDiv>
        <p style={{ color: "#0c1a2a", fontSize: "1.2rem", margin: "5px 0" }}>
          <b>{job.title}</b>
        </p>
        <NormalTextDiv>{job.company}</NormalTextDiv>
        <p>{job.country}</p>
      </Card>
    </AllLinks>
  );
};

export default Job;
