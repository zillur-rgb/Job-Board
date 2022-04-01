import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonComponent from "../../Components/Button/Button";
import {
  About,
  Description,
  Info,
  MainDiv,
  SingleTextDiv,
} from "./SingleJob.style";

const SingleJob = () => {
  const [jobs, setJobs] = useState([]) || [];
  const params = useParams();

  useEffect(() => {
    axios.get("data.json").then((res) => {
      setJobs(res.data);
    });
  }, []);

  const singleJob = jobs.find((job) => +params.id === job.id);

  if (singleJob) {
    console.log(singleJob);
  }

  return (
    <div>
      {singleJob && (
        <MainDiv>
          <About>
            <div>
              <b>{singleJob.company}</b> <br />
              <a
                href="www.google.com"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "rgba(12, 26, 42, 0.7)",
                }}
              >
                www.{singleJob.company}.com
              </a>
            </div>
            <ButtonComponent
              bg="rgba(12, 26, 42, 0.3)"
              color="rgb(12, 26, 42)"
              text="Company Site"
            />
          </About>

          <Info>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <SingleTextDiv>
                    <p>{singleJob.posted} ago</p>
                    <div>
                      <b>-</b>
                    </div>
                    <p>{singleJob.jobtype}</p>
                  </SingleTextDiv>

                  <p
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      margin: "0px",
                      color: "rgb(12, 26, 42)",
                    }}
                  >
                    {singleJob.title}
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      margin: "2px 0",
                      color: "rgba(12, 26, 42, 0.7)",
                    }}
                  >
                    {singleJob.country}
                  </p>
                </div>
                <ButtonComponent bg="#0c1a2a" color="#fff" text="Apply Now" />
              </div>
            </div>

            <div className="job-description">
              <p
                style={{
                  color: "rgba(12, 26, 42, 0.7)",
                  fontSize: ".9rem",
                  lineHeight: "20px",
                }}
              >
                {singleJob.intro}
              </p>
            </div>

            <Description>
              <h1>Requirements</h1>
              <ul>
                {singleJob.requirements.map((requ) => (
                  <li key={requ.id}>{requ.text}</li>
                ))}
              </ul>
            </Description>

            <Description>
              <h1>What Will You Do?</h1>
              <ul>
                {singleJob.task.map((res) => (
                  <li key={res.id}>{res.text}</li>
                ))}
              </ul>
            </Description>
          </Info>

          <About>
            <div style={{ color: "rgba(12, 26, 42, 0.7)", fontWeight: "bold" }}>
              {singleJob.title}
              <p style={{ margin: "5px 0" }}>{singleJob.company}</p>
            </div>
            <ButtonComponent bg="#0C1A2A" color="#fff" text="Apply Now" />
          </About>
        </MainDiv>
      )}
    </div>
  );
};
export default SingleJob;
