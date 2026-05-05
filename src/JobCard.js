import { useState } from "react";

function JobCard({ job, deleteJob, updateJob }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedJob, setEditedJob] = useState(job);

    const handleSave = () => {
        updateJob(editedJob);
        setIsEditing(false);
    };

    return (
        <div style={{
            border: "1px solid #e0e0e0",
            borderRadius: "10px",
            padding: "1rem",
            marginBottom: "1rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
        }}>
            {isEditing ? (
                <>
                    <input
                        value={editedJob.company}
                        onChange={(e) =>
                            setEditedJob({ ...editedJob, company: e.target.value })
                        }
                    />

                    <input
                        value={editedJob.role}
                        onChange={(e) =>
                            setEditedJob({ ...editedJob, role: e.target.value })
                        }
                    />

                    <select
                        value={editedJob.status}
                        onChange={(e) =>
                            setEditedJob({ ...editedJob, status: e.target.value })
                        }
                    >
                        <option>Applied</option>
                        <option>Interview</option>
                        <option>Rejected</option>
                        <option>Offer</option>
                    </select>

                    <textarea
                        value={editedJob.notes}
                        onChange={(e) =>
                            setEditedJob({ ...editedJob, notes: e.target.value })
                        }
                    />

                    <button onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    <h3>{job.company}</h3>
                    <p>{job.role}</p>
                    <p>Status: {job.status}</p>
                    <p>{job.notes}</p>

                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => deleteJob(job.id)}>Delete</button>
                </>
            )}
        </div>
    );
}

export default JobCard;