import { useState } from "react";

function JobForm({ addJob }) {
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("Applied");
    const [notes, setNotes] = useState("");

    const handleSubmit = () => {
        if (!company || !role) return;

        addJob({
            company,
            role,
            status,
            notes
        });

        setCompany("");
        setRole("");
        setStatus("Applied");
        setNotes("");
    };

    return (
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <h2>Add Job</h2>

            <input
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />

            <input
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            />

            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option>Applied</option>
                <option>Interview</option>
                <option>Rejected</option>
                <option>Offer</option>
            </select>

            <textarea
                placeholder="Notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            />

            <button onClick={handleSubmit}>Add Job</button>
        </div>
    );
}

export default JobForm;