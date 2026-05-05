import JobCard from "./JobCard";

function JobList({ jobs, deleteJob, updateJob }) {
    return (
        <div>
            {jobs.map(job => (
                <JobCard
                    key={job.id}
                    job={job}
                    deleteJob={deleteJob}
                    updateJob={updateJob}
                />
            ))}
        </div>
    );
}

export default JobList;