
import './App.css';
import Details from './component/Details';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DisplayAndSend from './component/DisplayAndSend'
import NewUser from './component/NewUser'

function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route exact path="/wish" component={Details}/>
      <Route exact path="/wish/:name/:message" component={DisplayAndSend}/>
      <Route exact path="/wish/:name/:message/new" component={NewUser}/>
    </Switch>
    </Router>
    </>
  );
}

export default App;
