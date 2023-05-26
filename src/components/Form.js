import React, { useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


export default (props) => {
    //keep track of what is being typed via useState hook
    const navigate= useNavigate()
    const { initialName, initialType, initialDescription, initialSkill1, initialSkill2, initialSkill3,  onSubmitProp, errors, id } = props;   
    const [name, setName]= useState(initialName) 
    const [type, setType]= useState(initialType) 
    const [description, setDescription]= useState(initialDescription) 
    const [skill1, setSkill1]= useState(initialSkill1) 

    const [skill2, setSkill2]= useState(initialSkill2) 

    const [skill3, setSkill3]= useState(initialSkill3) 


    // const [formData, setFormData] =useState({
    //     name: "", 
    //     type: "", 
    //     description: "0",
    //     skills: false
    // })

    // const [errors, setErrors] = useState(null);


    // handler when the form is submitted
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name, type, description, skill1, skill2, skill3});}
        //prevent default behavior of the submit
        // //make a post request to create a new prodct and taking in the
        // //data types you used in your model
    //     axios.post('http://localhost:8000/api/adopt/create', formData) 
    //     .then(res=>{
    //         console.log("kiwi")
    //         console.log(res)
    //         navigate('/')
    //     })
    //     .catch(err => {
    //         console.log("bananananana")
    //         console.log(err.response)
    //         setErrors(err.response?.data?.errors)})
    // }

    // const handleOnChange = (e) => {
    //     if(e.target.type === "checkbox"){
    //         console.log(e.target.checked)
    //         setFormData({
    //             ...formData,
    //             [e.target.name] : e.target.checked
    //         })
    //     } else {
    //         setFormData({
    //             ...formData,
    //             [e.target.name] : e.target.value
    //         })
    //     }
    // }


    //onsubmit for the form that runs the method above
    //onChange for each individual input that uses the setX and the value of X
    return (
        <form onSubmit={onSubmitHandler}>
            {errors ?
                errors.map((error, index)=>
                <p key={index} className="text-danger">{error}</p> )
                :null}
            <p>
                <label><strong>Name:</strong> </label><br/>
                <input type="text"  name="name" onChange={(e)=> setName(e.target.value)} value={name}/>

            </p>                
            {/* {
                    errors?.name && (
                        <span className="text-danger">{errors.name?.message}</span>
                    )
                } */}
            <p>
                <label><strong>Type:</strong></label><br/>
                <input type="text" name="type" onChange={(e)=> setType(e.target.value)} value={type}/>
                </p>
                {/* {
                    errors?.type && (
                        <span className="text-danger">{errors.type?.message}</span>
                    )
                } */}
            <p>
                <label><strong>Description:</strong></label><br/>
                <input type="text" name="description" step="any" onChange={(e)=> setDescription(e.target.value)} value={description}/>
                </p>
                {
                    errors?.description && (
                        <span className="text-danger">{errors.description?.message}</span>
                    )
                }
                <label className="text-muted"><strong>Skills </strong>(optional):</label><br />
            <p>
            <label>Skill 1:</label><br />
            <input type="text" name="description" step="any" onChange={(e)=> setSkill1(e.target.value)} value={skill1}/>
                    </p>
                    <label>Skill 2:</label><br />
                    <p>
                    <input type="text" name="description" step="any" onChange={(e)=> setSkill2(e.target.value)} value={skill2}/>
                    </p>

                    <label>Skill 3:</label><br />

                    <p>
                    <input type="text" name="description" step="any" onChange={(e)=> setSkill3(e.target.value)} value={skill3}/>

                        </p>
            <input className="btn btn-primary m-2" type="submit"/>
            <button className="btn btn-warning m-2" onClick={(e)=> navigate('/')}> Cancel </button>

        </form>
    )
}
