import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginComponent from "./components/AuthComponent/LoginComponent";
import RegisterComponent from "./components/AuthComponent/RegisterComponent";
import DashbordComponent from "./components/HomeComponent/DashbordComponent"; 
import NotFound from "./components/OtherComponents/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        
          <Route exact path="/"  component={LoginComponent} />
          <Route exact path="/dashbord"  component={DashbordComponent} />
          <Route exact path="/login"  component={LoginComponent} />
          <Route exact path="/register"  component={RegisterComponent} />
          <Route  exact path="*"  component={NotFound} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
