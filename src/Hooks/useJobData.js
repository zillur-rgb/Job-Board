import axios from "axios";
import { useEffect, useState } from "react";

const useJobData = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    axios.get("data.json").then((res) => setJobData(res.data));
  });
  return [jobData, setJobData];
};

export default useJobData;
