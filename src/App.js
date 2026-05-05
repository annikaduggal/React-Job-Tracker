import { useState } from "react";
import JobForm from "./JobForm";
import JobList from "./JobList";

function App() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: "Shopify",
      role: "Frontend Developer",
      status: "Applied",
      notes: "Referred by a friend"
    }
  ]);

  const [filter, setFilter] = useState("All");

  const addJob = (job) => {
    const newJob = {
      ...job,
      id: Date.now()
    };

    setJobs([...jobs, newJob]);
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  const updateJob = (updatedJob) => {
    setJobs(jobs.map(job =>
        job.id === updatedJob.id ? updatedJob : job
    ));
  };

  const filteredJobs = jobs.filter(job =>
      filter === "All" ? true : job.status === filter
  );

  const btnStyle = {
    marginRight: "0.5rem",
    padding: "0.4rem 0.8rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    cursor: "pointer"
  };

  return (
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "sans-serif"
      }}>
        <h1 style={{marginBottom: "1rem"}}>Job Tracker Dashboard</h1>

        <JobForm addJob={addJob}/>

        {/* FILTER */}
        <div style={{marginTop: "1rem"}}>
          <button
              onClick={() => setFilter("All")}
              style={btnStyle}
          >
            All
          </button>

          <button
              onClick={() => setFilter("Applied")}
              style={btnStyle}
          >
            Applied
          </button>

          <button
              onClick={() => setFilter("Interview")}
              style={btnStyle}
          >
            Interview
          </button>

          <button
              onClick={() => setFilter("Rejected")}
              style={btnStyle}
          >
            Rejected
          </button>
        </div>

        <JobList
            jobs={filteredJobs}
            deleteJob={deleteJob}
            updateJob={updateJob}
        />
      </div>
  );
}

export default App;