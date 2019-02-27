import React, { Component } from "react";
import axios from 'axios';

class Register extends Component {

  state = {
    email: '',
    password: '',
    repeatPassword: '',
  };

  handleEmailChange = (event) =>{
    this.setState({ email: event.target.value })
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

    const { email, password, repeatPassword } = this.state;
    
    const user = {
      login: email,
      password: password===repeatPassword ? password : null
    }
    
    console.log(user);

    axios.post('', user).then(res => {
      console.log(res)
    })

  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email: 
            <input type='text' name='email' onChange={this.handleEmailChange} />
          </label>
          <label>
            Password: 
            <input type='password' name='password' onChange={this.handlePasswordChange} />
          </label>
          <label>
            Repeat Password: 
            <input type='password' name='repeatPassword' onChange={this.handleRepeatPasswordChange} />
          </label>
          <button type='submit'>Register</button>
        </form>
      </div>  
    );
  }
}

export default Register;
