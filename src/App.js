import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/project/:id" component={ProjectDetails}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
