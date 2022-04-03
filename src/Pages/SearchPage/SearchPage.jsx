import { useParams } from "react-router-dom";
import useJobData from "../../Hooks/useJobData";

const SearchPage = () => {
  const [jobData] = useJobData();
  const params = useParams();
  console.log(params);

  const searchedByTitle = jobData.filter((job) =>
    job.title.toLowerCase().includes(params.position.toLowerCase())
  );

  console.log(searchedByTitle);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default SearchPage;
