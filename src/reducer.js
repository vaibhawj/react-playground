

export default (state = {}, action) => {
    switch(action.type) {
        case "SET_CUST_INFO": return {
            ...state,
            customerInfo: {
                ...action.payload
            }
        }

        case "SET_EMAIL_CONTENT": return {
            ...state,
            emailContent: action.payload.emailContent
        }
        default: return state
    }
}