import { createContext, useContext, useReducer } from 'react';
import reducer from '../reducer';

export const FeedbackContext = createContext();

export const useFeedbackContext = () => useContext(FeedbackContext);

export const FeedbackContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { customerInfo, emailContent } = state
    const setCustomerInfo = ({ firstName, lastName, emailId }) => {
        dispatch({
            type: "SET_CUST_INFO", payload: {
                firstName,
                lastName,
                emailId
            }
        })
    }

    const setEmailContent = (emailContent) => {
        dispatch({
            type: "SET_EMAIL_CONTENT", payload: {
                emailContent
            }
        })
    }
    const value = { customerInfo, setCustomerInfo, emailContent, setEmailContent };

    return (<FeedbackContext.Provider value={value}>{props.children}</FeedbackContext.Provider>)
}

const initialState = {
    customerInfo: {
        firstName: "",
        lastName: "",
        emailId: ""
    },
    emailContent: ""
}
