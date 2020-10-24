import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, TextField } from '@material-ui/core';
import useFeedback from '../hooks/useFeedback';
import { AppContext } from '../App';


const handleChange = (value, setter) => {
    setter(value)
}

export default () => {
    const history = useHistory();
    const { customerInfo, setCustomerInfo } = useContext(AppContext);

    const [firstName, setFirstName] = useState(customerInfo.firstName)
    const [lastName, setLastName] = useState(customerInfo.lastName)
    const [emailId, setEmailId] = useState(customerInfo.emailId)

    console.log("Rendering Customer Info");

    return (
        <Grid container spacing={10}>
            <Grid item xs={6}><TextField label="First Name" value={firstName} onChange={e => handleChange(e.target.value, setFirstName)}></TextField></Grid>
            <Grid item xs={6}><TextField label="Last Name" value={lastName} onChange={e => handleChange(e.target.value, setLastName)}></TextField></Grid>
            <Grid item xs={6}><TextField label="EmailId" value={emailId} onChange={e => handleChange(e.target.value, setEmailId)}></TextField></Grid>
            <Grid item xs={6}><Button variant="contained" color="primary" onClick={() => {
                setCustomerInfo({ firstName, lastName, emailId });
                history.push("/next");
            }}>Next</Button></Grid>
        </Grid>
    )
}