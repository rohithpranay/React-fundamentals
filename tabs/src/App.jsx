import { useEffect } from "react";
import { useState } from "react";
import { JobInfo } from "./JobInfo";
import { BtnContainer } from "./BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currjob, setCurrJob] = useState(0);

  function handleCurrJob(company) {
    const indx = jobs.findIndex((job) => job.company === company);
    setCurrJob(indx);
  }
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("something went wrong");
        const data = await res.json();
        setJobs(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchJobs();
  }, []);
  if (isLoading)
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        handleCurrJob={handleCurrJob}
        currJob={currjob}
      />
      <JobInfo jobs={jobs} currJob={currjob} />
    </section>
  );
};
export default App;
