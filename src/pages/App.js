import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import ReactDOM from 'react-dom';
import { Layout } from "antd";
import { HeaderExample, RandomFood } from "../components";
import '../index.css';

import Login from "./Login";
import Register from "./Register";
import Welcome from "./Welcome";
import Home from "./Home";
import Profile from "./Profile";
import Recipes from "./Recipes";
import Admin from "./Admin";
import StaticMenu from "./StaticMenu";
import Menus from "./Menus";
import Recept from "./Recept";
import OneFood from "./OneFood";
import WeeklyMenu from "./WeeklyMenu";
class App extends Component{
  render(){
    return (
      <div className="App">
      <BrowserRouter>
        <Layout>
          <HeaderExample />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/recipes" component={Recipes} />  
          <Route exact path="/randomFood" component={RandomFood} />
          <Route exact path="/tamaq" component={Admin} />
          <Route exact path="/staticmenu" component={StaticMenu} />
          <Route exact path="/welcome" component={Welcome} />  
          <Route exact path="/menu" component={Menus} />
          <Route exact path="/recept"  component={Recept} />
          <Route exact path="/food/:id"  component={OneFood} />
          <Route exact path="/weekly" component={WeeklyMenu} />
        </Layout>
      </BrowserRouter>
    </div>
    )
  }
}

export default App;


// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
