import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate, useParams } from 'react-router-dom' //this is new
import axios from 'axios'
import Form from '../components/Form'



const Edit = () => {
    const { id } = useParams()
    const [adopts, setAdopts] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/adopt/view/' + id)
        .then(res => {
            setAdopts(res.data);
                console.log(adopts.name, adopts.type, adopts.description, adopts.skill1, adopts.skill2, adopts.skill3)
        })
        .catch(err=> console.log(err))
}, [id]);
    //     const getData =async () => {
    //         console.log("I am in the get!")
    //         const response = await axios.get('http://localhost:8000/api/adopt/view/' + id)
    //         console.log(response.data)
    //         setAdopts(response.data)
            
    //     }
    // getData()
    // console.log(adopts.name, adopts.type, adopts.description, adopts.skill1, adopts.skill2, adopts.skill3)
    // }, [id]);

    // const removeFromDom = adoptId => {
    //     setAdopts(adopts.filter(adopts => adopts._id !== adoptId)
    // }

    const editAdopt = adopts =>{
        axios.put(`http://localhost:8000/api/adopt/edit/${id}`, adopts)
            .then(res => navigate('/'))
            .catch(err => {
                const errorResp = err.response.data.errors
                const errorList =[]
                for (const key of Object.keys(errorResp)){
                    errorList.push(errorResp[key].message)
                }
                setErrors(errorList)
            })}

    return (
        <div>
            <h1 className= "display-1">Adoption View</h1>
            <Link to="/"> Home</Link>
            <br></br>
            <h4>Edit {adopts.name}!</h4>
            { adopts?
                
                <Form  initialName={adopts.name} initialType ={adopts.type} initialDescription ={adopts.description} initialSkill1 ={adopts.skill1} initialSkill2 ={adopts.skill2} initialSkill3 ={adopts.skill3}  onSubmitProp={editAdopt} errors={errors}/>: 
                <h3>Loading!</h3>
                }

        </div>
    )
}

export default Edit