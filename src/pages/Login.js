import React, { Component } from "react";
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
class Login extends Component {

  state = {
    email: '',
    password: '',
    result: {}
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

    const { email, password } = this.state;

    const user = {
      login: email,
      password: password
    }

    axios.post(`http://10.8.130.113/tamaqtan/test.php`, { user })
      .then(res => {
        console.log(res)
      })
      .catch(res =>{
        console.log(res)
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

export default Login;
