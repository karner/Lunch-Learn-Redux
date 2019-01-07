import React, { Component } from 'react';
import { Button, Heading, Text, TextInput } from 'evergreen-ui';
import login from '../GeoWikiAPI/User';
//import { hex_md5 as md5 } from '../../Transforms/MD5';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
  }

  login = () => {
    login(this.state.email, this.state.password);
  };

  updateEmail = (email) => {
    this.setState({email: email});
  };

  updatePassword = (password) => {
    this.setState({password: password});
  };

  render() {
    return (
      <div style={this.props.style}>
        <Heading>Login</Heading>
        <TextInput width='200px' onChange={(event)=>this.updateEmail(event.target.value)}/>
        <TextInput width='200px' type='password' onChange={(event)=>this.updatePassword(event.target.value)}/>
        <Button iconBefore='log-in' onClick={this.login}>
            <Text>Login</Text>
        </Button>
      </div>
    );
  }
}

export default Login;
