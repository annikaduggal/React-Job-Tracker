import { useState, useEffect } from "react";
import JobForm from "./JobForm";
import JobList from "./JobList";

function App() {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : [
      {
        id: 1,
        company: "Shopify",
        role: "Frontend Developer",
        status: "Applied",
        notes: "Referred by a friend"
      }
    ];
  });

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

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
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    border: "none",
    background: "#1e4530",
    color: "white",
    cursor: "pointer",
    fontSize: "0.85rem"
  };

  return (
      <div style={{
        maxWidth: "800px",
        margin: "2rem auto",
        fontFamily: "system-ui, sans-serif",
        background: "#fafafa",
        padding: "2rem",
        borderRadius: "12px"
      }}>

        <h1 style={{marginBottom: "1rem"}}>Job Tracker Dashboard</h1>

        <JobForm addJob={addJob}/>

        {/* FILTER */}
        <div style={{marginTop: "1rem"}}>
          <button
              onClick={() => setFilter("All")}
              style={{
                ...btnStyle,
                background: filter === "All" ? "#1e4530" : "#ccc"
              }}
          >
            All
          </button>

          <button
              onClick={() => setFilter("Applied")}
              style={{
                ...btnStyle,
                background: filter === "Applied" ? "#1e4530" : "#ccc"
              }}
          >
            Applied
          </button>

          <button
              onClick={() => setFilter("Interview")}
              style={{
                ...btnStyle,
                background: filter === "Interview" ? "#1e4530" : "#ccc"
              }}
          >
            Interview
          </button>

          <button
              onClick={() => setFilter("Rejected")}
              style={{
                ...btnStyle,
                background: filter === "Rejected" ? "#1e4530" : "#ccc"
              }}
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