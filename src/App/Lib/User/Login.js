import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Heading, Text, TextInput } from 'evergreen-ui';
import { SendLogin } from "./Reducers/Actions";
import { hex_md5 as md5 } from '../../Transforms/MD5';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
  }

  login = () => {
    this.props.sendLogin(this.state.email, md5(this.state.password));
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

const mapDispatchToProps = (dispatch) => ({
  sendLogin: (email, passwordHash) => {
    dispatch(SendLogin(email, passwordHash));
  }
});

export default connect(mapDispatchToProps)(Login);
