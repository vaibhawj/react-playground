import { createContext, useReducer } from 'react';
import reducer from '../reducer';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    return <AppContext.Provider>{props.children}</AppContext.Provider>
}

const initialState = {
    customerInfo: {
        firstName: "",
        lastName: "",
        emailId: ""
    },
    emailContent: ""
}

export default () => {
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
    return [customerInfo, setCustomerInfo, emailContent, setEmailContent];
}