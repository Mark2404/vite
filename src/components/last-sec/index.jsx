import React, { useState } from "react";
import "./index.scss";

function LastSec() {
    const [email, setEmail] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = () => {
        if (email.trim() !== "") {
            setIsModalOpen(true);
        }
    };

    return (
        <div className="last-sec container">
            <div>
                <h1>Powering your business</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente.</p>
            </div>
            <div>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSubmit}>Start free trial</button>
            </div>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Thank you!</h3>
                        <p>Your email: <b>{email}</b></p>
                        <button onClick={() => setIsModalOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LastSec;
