import {useState} from 'react';
import axios from 'axios';

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postData = (e) =>{
        e.preventDefault();
        axios.post('https://64241e5a47401740433376dd.mockapi.io/crudData', 
        {
            firstName,
            lastName,
            checkbox
        })
    }

    return (
        <form >
            <div className="form-group text-start">
                <label className="text-muted mb-3">First Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className="form-group text-start">
                <label className="text-muted mb-3 mt-3">Last Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className="form-group text-start">
                <div className="form-check mt-3 mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        onChange={(e) => setCheckbox(prev => !prev)}
                    />
                    <label className="fs-5">I agree to the Terms and Conditions</label>
                </div>
            </div>
            <button 
            type="submit" 
            className="btn btn-success"
            onClick={postData}
            >Submit</button>
        </form>
    )
}