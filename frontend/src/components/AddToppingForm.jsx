import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Component to add a new topping
function AddToppingForm({ onToppingAdded }) {
    const [name, setName] = useState(''); 
    const [error, setError] = useState(''); 

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior/reloading
        try {
            // Send POST request to add new topping
            await axios.post(`${API_URL}/toppings`, { name });
            setName(''); 
            setError(''); 
            onToppingAdded(); // Trigger the parent callback to refresh the topping list
        } catch (error) {
            if (error.response) {
                setError(`Error: ${error.response.status} ${error.response.statusText} - ${error.response.data?.error || "An error occurred."}`);
            } else if (error.request) {
                setError("Error: No response received from the server.");
            } else {
                setError(`Error: ${error.message}`);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="New Topping Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">Add Topping</button>
            {error && <p className="text-danger mt-2">{error}</p>} 
        </form>
    );
}

export default AddToppingForm;