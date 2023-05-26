//import the basics first
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom' //this is new
import 'bootstrap/dist/css/bootstrap.css';
import AdoptTable from '../components/AdoptTable'


export default function Main(props) {
    // const [adopt, setAdopt] = useState([])
    const [adopts, setAdopts] = useState([])

    // const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/adopt')
            .then(response => {
                setAdopts(response.data)
                // setLoaded(true)
            })
    }, [])

    const removeFromDom = adoptId => {
        setAdopts(adopts.filter(adopts => adopts._id !== adoptId));
    }


    return (
        <div>
            {/* <AdoptForm /> */}
            <h1 className="display-1">Adoption Board</h1>
            <br></br>

            <Link to="/adopt/create">
                Add a pet to the shelter
            </Link>
            <br></br>
            <br></br>

            <h4>These pets are looking for a loving home!</h4>
            <hr />
            {adopts? 
            <AdoptTable adopts={adopts} onDeleteButton={removeFromDom}/>
            : <h1>No pets yet!</h1>
            }
        </div>
    )
}
