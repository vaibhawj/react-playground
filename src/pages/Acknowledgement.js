import React from 'react';
import { useFeedbackContext } from '../hooks/useFeedbackContext';

export default () => {
    const { customerInfo: { firstName }, emailContent } = useFeedbackContext();
    console.log(emailContent);
    console.log("Rendering Acknowledgement");
    return (
        <div>
            Thank you for the feedback, {firstName}
        </div>
        
    )
}