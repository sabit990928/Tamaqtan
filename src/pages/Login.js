import React, { Component } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import { Slider } from '../components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  height: 300px;
  align-items: center;
  flex-direction: column;
`;
class Login extends Component {

  state = {
    email: '',
    password: '',
  };

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
      email: email,
      password: password
    }
    
    axios.post(`http://localhost/back/api/login.php`, user)
      .then(res => {
        console.log("Data", res)  
        this.props.history.push('/welcome')
      })
      .catch(res =>{
        console.log("Exception", res)
      }
      )
  }

  render() {
    return (
      <Container>
        <Slider />
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
      </Container>  
    );
  }
}

export default withRouter(Login);
