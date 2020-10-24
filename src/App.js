import { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerInfo from './pages/CustomerInfo';
import EmailContent from './pages/EmailContent';
import Acknowledgement from './pages/Acknowledgement';
import reducer from './reducer';

export const AppContext = createContext();
const initialState = {
  customerInfo: {
    firstName: "",
    lastName: "",
    emailId: ""
  },
  emailContent: ""
}

function App() {

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

  console.log("Rendering App");

  return (
    <div>
      <h1 style={{ marginLeft: "2%" }}>Playground</h1>
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <AppContext.Provider value={{ customerInfo, setCustomerInfo, emailContent, setEmailContent }}>
          <Router>
            <Switch>
              <Route path="/next"><EmailContent /></Route>
              <Route path="/final"><Acknowledgement /></Route>
              <Route path="/"><CustomerInfo /></Route>
            </Switch>
          </Router>
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
