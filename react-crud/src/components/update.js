import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Update() {
    let navigate = useNavigate();
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);


    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
    }, []);

    const updateAPIData = (e) => {
        e.preventDefault();
        axios.put(`https://64241e5a47401740433376dd.mockapi.io/crudData/${id}`, {
            firstName,
            lastName,
            checkbox,
        }).then(() => {
            navigate("/")
        })
    }

    return (
        <>
            <div>
                <form >
                    <div className="form-group text-start">
                        <label className="text-muted mb-3">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-group text-start">
                        <label className="text-muted mb-3 mt-3">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-group text-start">
                        <div className="form-check mt-3 mb-3">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                checked={checkbox}
                                onChange={(e) => setCheckbox(prev => !prev)}
                            />
                            <label className="fs-5">I agree to the Terms and Conditions</label>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <button
                            type="submit"
                            className="btn btn-secondary me-5"
                            onClick={() => navigate("/")}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={updateAPIData}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}