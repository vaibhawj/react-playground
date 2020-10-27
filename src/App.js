import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerInfo from './pages/CustomerInfo';
import EmailContent from './pages/EmailContent';
import Acknowledgement from './pages/Acknowledgement';
import { withFeedbackContextProvider } from './hooks/useFeedbackContext';

function App() {
  console.log("Rendering App");

  return (
    <div>
      <h1 style={{ marginLeft: "2%" }}>Playground</h1>
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <Router>
          <Switch>
            <Route path="/next">{withFeedbackContextProvider(<EmailContent />)}</Route>
            <Route path="/final">{withFeedbackContextProvider(<Acknowledgement />)}</Route>
            <Route path="/">{withFeedbackContextProvider(<CustomerInfo />)}</Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
