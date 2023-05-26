import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom' //this is new
import 'bootstrap/dist/css/bootstrap.css';
import DeleteButton from './DeleteButton'


const AdoptList = (props) => {

    const [adopts, setAdopts] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/adopt')
            .then(res => setAdopts(res.data));
    }, [])

    let adoptListSort = adopts.sort(function (a, b){
        let type1 = a.type.toLowerCase()
        let type2 = b.type.toLowerCase()
        if (type1<type2){
            return -1
        }
        if (type2<type1){
            return 1
        }
        return 0
    })

    const removeFromDom = adoptId => {
        setAdopts(adopts.filter(adopts => adopts._id !== adoptId));
    }

    return (
        <div className="d-flex justify-content-center">
            <table className="table table-striped m-2 w-75 table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" className="h5">Pet Name</th>
                        <th scope="col" className="h5">Pet Type</th>
                        <th scope="col" className="h5">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        adopts && adoptListSort.map((adopt, index) => {
                            return (
                                <tr key={index}>
                                    <td className="align-middle">
                                        <Link to={"/adopt/view/" + adopt._id}>
                                            {adopt.name}
                                        </Link>
                                    </td>
                                    <td className="align-middle">
                                        {adopt.type}
                                    </td>
                                    <td>
                                    <Link to={"/adopt/view/" + adopt._id}>
                                    <button className="btn btn-primary m-2">details</button>
                                        </Link>
                                        |
                                        <Link to={"/adopt/edit/" + adopt._id}>
                                            <button className="btn btn-warning m-2">Edit</button>
                                        </Link>
                                        |
                                        <DeleteButton adoptId={adopt._id} successCallback={() => removeFromDom(adopt._id)} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default AdoptList;