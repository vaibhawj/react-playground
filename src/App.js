import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerInfo from './pages/CustomerInfo';
import EmailContent from './pages/EmailContent';
import Acknowledgement from './pages/Acknowledgement';
import { FeedbackContextProvider } from './hooks/useFeedbackContext';

function App() {
  console.log("Rendering App");

  return (
    <div>
      <h1 style={{ marginLeft: "2%" }}>Playground</h1>
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
          <Router>
            <Switch>
              <Route path="/next"><FeedbackContextProvider><EmailContent /></FeedbackContextProvider></Route>
              <Route path="/final"><FeedbackContextProvider><Acknowledgement /></FeedbackContextProvider></Route>
              <Route path="/"><FeedbackContextProvider><CustomerInfo /></FeedbackContextProvider></Route>
            </Switch>
          </Router>
      </div>
    </div>
  );
}

export default App;
