import React, { Component } from "react";
import axios from 'axios';
import styled from 'styled-components';
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
class Register extends Component {

  state = {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    // repeatPassword: 'ads',
  };

  handleEmailChange = (event) =>{
    this.setState({ email: event.target.value })
  }

  handleNameChange = (event) =>{
    this.setState({ firstname: event.target.value })
  }

  handleSurnameChange = (event) =>{
    this.setState({ lastname: event.target.value })
  }

  handlePasswordChange = (event) =>{
    this.setState({ password: event.target.value })
  }

  handleRepeatPasswordChange = (event) =>{
    this.setState({ password: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password, firstname, lastname, repeatPassword } = this.state;
    
    const user = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    }
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...' 
    }
    console.log(user);

    axios.post('http://172.20.10.4/back/api/create_user.php', user)
    .then(res => {
      console.log('asd', user)
      console.log(res);
      this.props.history.push('/login')
    })
    .catch(res => {
      console.log('Registration failed')
    })

  }

  render() {

    return (
      <Container>
        <Slider />
        <Form onSubmit={this.handleSubmit}>
          <label>
            First name: 
            <input type='text' name='firstName' onChange={this.handleNameChange} />
          </label>
          <label>
            Last name: 
            <input type='text' name='lastName' onChange={this.handleSurnameChange} />
          </label>
          <label>
            Email: 
            <input type='text' name='email' onChange={this.handleEmailChange} />
          </label>
          <label>
            Password: 
            <input type='password' name='password' onChange={this.handlePasswordChange} />
          </label>
          {/* <label>
            Repeat Password: 
            <input type='password' name='repeatPassword' onChange={this.handleRepeatPasswordChange} />
          </label> */}
          <button type='submit'>Register</button>
        </Form>
      </Container>  
    );
  }
}

export default Register;
