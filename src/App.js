import { useState } from "react";

function App() {

  // FORM STATE (must come first)
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [notes, setNotes] = useState("");

  // JOB STATE
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

  // ADD JOB
  const addJob = () => {
    if (!company || !role) return;

    const newJob = {
      id: Date.now(),
      company,
      role,
      status,
      notes
    };

    setJobs([...jobs, newJob]);

    // clear form
    setCompany("");
    setRole("");
    setStatus("Applied");
    setNotes("");
  };

  // FILTER LOGIC
  const filteredJobs = jobs.filter(job =>
      filter === "All" ? true : job.status === filter
  );

  // UI
  return (
      <div style={{ padding: "2rem" }}>
        <h1>Job Tracker Dashboard</h1>

        {/* FORM */}
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <h2>Add Job</h2>

          <input
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              style={{ display: "block", marginBottom: "0.5rem" }}
          />

          <input
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={{ display: "block", marginBottom: "0.5rem" }}
          />

          <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              style={{ display: "block", marginBottom: "0.5rem" }}
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Rejected</option>
            <option>Offer</option>
          </select>

          <textarea
              placeholder="Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{ display: "block", marginBottom: "0.5rem" }}
          />

          <button onClick={addJob}>Add Job</button>
        </div>

        {/* FILTER */}
        <div style={{ marginTop: "1rem" }}>
          <button onClick={() => setFilter("All")}>All</button>
          <button onClick={() => setFilter("Applied")}>Applied</button>
          <button onClick={() => setFilter("Interview")}>Interview</button>
          <button onClick={() => setFilter("Rejected")}>Rejected</button>
        </div>

        {/* JOB LIST */}
        {filteredJobs.map(job => (
            <div
                key={job.id}
                style={{
                  border: "1px solid #ccc",
                  margin: "1rem 0",
                  padding: "1rem"
                }}
            >
              <h3>{job.company}</h3>
              <p>{job.role}</p>
              <p>Status: {job.status}</p>
              <p>{job.notes}</p>
            </div>
        ))}
      </div>
  );
}

export default App;