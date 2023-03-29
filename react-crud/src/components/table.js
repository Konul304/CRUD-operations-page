import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Table() {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get('https://64241e5a47401740433376dd.mockapi.io/crudData')
            .then((response) => {
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    return (
        <>
            <div className='table_container '>
                <table className="table bg-light">
                    <thead>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Checked</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {APIData.map((data) => {
                            return (
                                <tr>
                                    <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                    <td>{data.checkbox ? 'Checked' : 'Unchecked'}</td>
                                    <td>
                                        <Link to='/update'><button onClick={() => setData(data)} className='btn btn-primary'>Update</button></Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}