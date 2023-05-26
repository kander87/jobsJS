import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton'


const AdoptView = (props) => {
    const { id } = useParams()
    const [adoptDetails, setAdoptDetails] = useState({})
    const navigate = useNavigate()
    const [adopts, setAdopts] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:8000/api/adopt/view/${id}`)
            .then(response => {
                setAdoptDetails(response.data)
            })
    }, [id]) //this [] basically tells the useEffect function to run every time the id changes

    const removeFromDom = adoptId => {
        setAdopts(adopts.filter(adopts => adopts._id !== adoptId));
    }

    const deleteAdopt = (id) => {
        axios.delete('http://localhost:8000/api/adopt/' + id)
            .then(res => { console.log(res) })
            .catch(err => console.error(err));
        navigate("/")
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-1">Pet Details</h1>
            <div className="border w-75">
            <p> <strong>Pet Name:</strong> {adoptDetails.name}</p>
            <p><strong>Pet Type:</strong> {adoptDetails.type}</p>
            <p><strong>Pet Description:</strong> {adoptDetails.description}</p>
            <br></br>
            <p><strong>Skills:</strong> </p>
            <ul className="p-2"Style="list-style-type: none">
                <li>{adoptDetails.skill1}</li>
                <li>{adoptDetails.skill2}</li>
                <li>{adoptDetails.skill3}</li>
                </ul>
            </div>


            <Link to={"/adopt/edit/" + adoptDetails._id}>
                <button className="btn btn-primary m-2">Edit</button>
            </Link>

            <DeleteButton adoptId={adoptDetails._id} successCallback={() => removeFromDom(adoptDetails._id)} />

        </div>
    )
}

export default AdoptView