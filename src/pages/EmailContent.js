import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, TextareaAutosize } from '@material-ui/core'
import { AppContext } from '../App';

export default () => {
    const history = useHistory();
    const { customerInfo, emailContent: emailContentContext, setEmailContent: setEmailContentContext } = useContext(AppContext);
    const [emailContentState, setEmailConentState] = useState(emailContentContext);

    console.log("Rendering EmailContent");

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <b>From:</b> {customerInfo.emailId}
            </Grid>
            <Grid item xs={12}>
                <TextareaAutosize rowsMin={20} cols={50} label="Type your message here" value={emailContentState} onChange={(e) => setEmailConentState(e.target.value)}></TextareaAutosize>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={
                    () => {
                        setEmailContentContext(emailContentState);
                        history.push("/final");
                    }
                }>Submit</Button>
            </Grid>
        </Grid>
    )
}