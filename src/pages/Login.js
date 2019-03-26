import React, { Component } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
class Login extends Component {

  state = {
    email: '',
    password: '',
    result: null
  };

  // componentDidMount() {
  //   axios.get('http://10.8.130.113/tamaqtan/test.php')
  //     .then(res => {
  //   console.log("persons here: ", res)
  //     })
  //     .catch(res => {
  //       console.log(res.data)
  //     })
  // }

  handleEmailChange = (event) =>{
    this.setState({ email: event.target.value })
  }

  handlePasswordChange = (event) =>{
    this.setState({ password: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password, result } = this.state;

    const user = {
      email: email,
      password: password
    }
    
// http://localhost/rest-api-authentication-example/api/login.php
    // axios.post(`http://10.8.130.113/tamaqtan/test.php`, { user })
    axios.post(`http://172.20.10.4/back/api/login.php`, user)
      .then(res => {
        this.setState({ result: res})
        console.log("Data", res)  
        this.props.history.push('/home')
      })
      .catch(res =>{
        console.log("Exception", res)
      }
      )
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <label>
            Email: 
            <input type='text' name='email' onChange={this.handleEmailChange} />
          </label>
          <label>
            Password: 
            <input type='password' name='password' onChange={this.handlePasswordChange} />
          </label>
          <button type='submit'>Login</button>
        </Form>
          Or <a href="/register">register</a> now
      </div>  
    );
  }
}

export default withRouter(Login);
