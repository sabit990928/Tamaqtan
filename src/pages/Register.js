import React, { Component } from "react";
import axios from 'axios';

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
    console.log(event, ' event here')
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

    axios.post('http://172.20.10.4/back/api/create_user.php', user).then(res => {
      console.log('asd', user)
      console.log(res)
    })

  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
        </form>
      </div>  
    );
  }
}

export default Register;
