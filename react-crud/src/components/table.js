import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Table() {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get('https://64241e5a47401740433376dd.mockapi.io/crudData')
            .then((response) => {
                setAPIData(response.data);
            })
    }, []);

    return (
        <>
            <table className="table bg-light">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Checked</th>
                    </tr>
                </thead>
                <tbody>
                    {APIData.map((data) => {
                        return (
                            <tr>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.checkbox ? 'Checked' : 'Unchecked'}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}