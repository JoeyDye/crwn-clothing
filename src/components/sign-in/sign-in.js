import React, { Component } from 'react';
import './sign-in.sass';
import FormInput from '../form-input/form-input';
import Button from '../custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase-utils';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { password, email } = this.state;

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            id="email"
            required
            handleChange={this.handleChange}
            label="email"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            id="password"
            required
            handleChange={this.handleChange}
            label="password"
          />
          <Button type="submit">Sign In</Button>
          <Button onClick={signInWithGoogle}>Sign in with Google</Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
