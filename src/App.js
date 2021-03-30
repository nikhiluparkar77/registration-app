import React,{useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux"
import store from "./Redux/Store";
import LoginComponent from "./components/AuthComponent/LoginComponent";
import RegisterComponent from "./components/AuthComponent/RegisterComponent";
import Header from "./components/HeaderComponent/Header";
import CommentComponent from "./components/HomeComponent/Comments/CommentComponent";
import DashbordComponent from "./components/HomeComponent/DashbordComponent"; 
import PotosComponent from "./components/HomeComponent/Photos/PotosComponent";
import PostComponent from "./components/HomeComponent/Posts/PostComponent";
import TodosComponent from "./components/HomeComponent/Todos/TodosComponent";
import NotFound from "./components/OtherComponents/NotFound";

function App() {
   
  return (
    <div className="App">
      <Provider store={store}>
        {localStorage.login ?  
        <Router>
          <Header />
          <Switch>   
            <Route exact path="/dashbord"  component={DashbordComponent} />
            <Route exact path="/posts"  component={PostComponent} />
            <Route exact path="/comments"  component={CommentComponent} />
            <Route exact path="/todos"  component={TodosComponent} />
            <Route exact path="/photos"  component={PotosComponent} />
            <Route  exact path="*"  component={NotFound} />
          </Switch>
        </Router> 
        : 
        <Router> 
          <Switch>   
          <Route exact path="/"  component={LoginComponent} />
          <Route exact path="/login"  component={LoginComponent} />
          <Route exact path="/register"  component={RegisterComponent} />
          <Route  exact path="*"  component={NotFound} />
          </Switch>
        </Router>
        }
       </Provider>
    </div>
  );
}

export default App;
