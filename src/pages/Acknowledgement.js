import React, { useContext } from 'react';
import { AppContext } from '../App';

export default () => {
    const { customerInfo: { firstName }, emailContent } = useContext(AppContext);
    console.log(emailContent);
    console.log("Rendering Acknowledgement");
    return (
        <div>
            Thank you for the feedback, {firstName}
        </div>
        
    )
}