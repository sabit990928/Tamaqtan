import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import ReactDOM from 'react-dom';
import { Layout } from "antd";
import HeaderExample from "../components/HeaderExample";
import '../index.css';

import Login from "./Login";
import Register from "./Register";
import Welcome from "./Welcome";
import Home from "./Home";
import Profile from "./Profile";
import Recipes from "./Recipes";


class App extends Component{
  render(){
    return (
      <div className="App">
      <BrowserRouter>
        <Layout>
     
          {/* <HeaderExample /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/welcome" component={Welcome} />  
          <Route exact path="/recipes" component={Recipes} />  
          
              
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
