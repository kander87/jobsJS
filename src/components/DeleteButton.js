import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

export default props => {

    const { adoptId, successCallback } = props;
    const navigate = useNavigate()

    const deleteJob = e => {
        axios.delete('http://localhost:8000/api/adopt/' + adoptId)
            .then(res => {
                successCallback();
            })
    }

    const deleteConfirm = () => {

        confirmAlert({
            title: 'Confirm to adopt',
            message: 'Are you sure to do this? Clicking "yes" will remove this pet from the pet shelter list of adoptable pets!',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {deleteJob()
                    navigate('/')} 
                },
                {
                    label: 'No',
                    onClick: () => navigate('/')
                }
            ]
        });
    }

    return (
        <button className="btn btn-danger m-2" onClick={deleteConfirm}>
            Adopt this Pet!
        </button>
    )
}

