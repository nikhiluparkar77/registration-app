import React,{useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginComponent from "./components/AuthComponent/LoginComponent";
import RegisterComponent from "./components/AuthComponent/RegisterComponent";
import Header from "./components/HeaderComponent/Header";
import DashbordComponent from "./components/HomeComponent/DashbordComponent"; 
import NotFound from "./components/OtherComponents/NotFound";

function App() {
  let RoutesPath;
  if(localStorage.login){
    RoutesPath = (
      <Router>
      <Header />
      <Switch>   
        <Route exact path="/dashbord"  component={DashbordComponent} />
        <Route  exact path="*"  component={NotFound} />
      </Switch>
    </Router>
    )
  }else{
   
    RoutesPath = (
      <Router> 
        <Switch>   
        <Route exact path="/"  component={LoginComponent} />
        <Route exact path="/login"  component={LoginComponent} />
        <Route exact path="/register"  component={RegisterComponent} />
        <Route  exact path="*"  component={NotFound} />
        </Switch>
      </Router> 
    )
  }
  return (
    <div className="App">
      {RoutesPath}
    </div>
  );
}

export default App;
