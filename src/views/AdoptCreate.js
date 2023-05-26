import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate} from 'react-router-dom' //this is new
import Form from '../components/Form'
import axios from 'axios';


const Create = () => {
    const navigate=useNavigate()

    const [errors,setErrors]= useState([])

    const addAdopt = adopt => {
    axios.post('http://localhost:8000/api/adopt/create', adopt) 
            .then(res=>
                navigate('/')
            )
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
            <h1>Adoption Board Add</h1>
            <Link to="/"> Home</Link>
            <h3>Add a new pet:</h3>
            {/* <AdoptCreateForm /> */}
            <Form initialName="" initialType ="" initialDescription ="" initialSkill1 ="" initialSkill2 ="" initialSkill3 ="" onSubmitProp={addAdopt} errors={errors}/>
        </div>
    )
}

export default Create