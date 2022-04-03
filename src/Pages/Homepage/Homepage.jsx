import { Wrapper } from "./Homepage.style";
import Jobs from "../../Components/Jobs/Jobs";
import useJobData from "../../Hooks/useJobData";

const Homepage = () => {
  const [jobData] = useJobData();

  return (
    <Wrapper>
      <Jobs jobs={jobData} />
    </Wrapper>
  );
};

export default Homepage;
