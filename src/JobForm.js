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

    const inputStyle = {
        display: "block",
        width: "100%",
        padding: "0.5rem",
        marginBottom: "0.5rem",
        borderRadius: "6px",
        border: "1px solid #ccc"
    };

    return (
        <div style={{marginTop: "2rem", marginBottom: "2rem"}}>
            <h2>Add Job</h2>

            <input
                style={inputStyle}
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />

            <input
                style={inputStyle}
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            />

            <select
                style={inputStyle}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option>Applied</option>
                <option>Interview</option>
                <option>Rejected</option>
                <option>Offer</option>
            </select>

            <textarea
                style={inputStyle}
                placeholder="Notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            />

            <button onClick={handleSubmit}>Add Job</button>
        </div>
    );
}

export default JobForm;