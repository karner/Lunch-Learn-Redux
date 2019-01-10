import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button, Heading, Icon, Text, TextInput,
} from 'evergreen-ui';
import { SendLogin } from './Reducers/Actions';
import { hex_md5 as md5 } from '../../Transforms/MD5';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  updateEmail = (email) => {
    this.setState({ email });
  }

  login = () => {
    const { email, password } = this.state;
    const passwordHash = md5(password);
    this.props.sendLogin(email, passwordHash);
  }

  updatePassword(password) {
    this.setState({ password });
  }

  render() {
    return (
      <div style={this.props.style}>
        <Heading>Login</Heading>
        <TextInput width='200px' onChange={(event)=>this.updateEmail(event.target.value)}/>
        <TextInput width='200px' type='password' onChange={(event)=>this.updatePassword(event.target.value)}/>
        <Button 
          iconBefore={(this.props.awaitingLoginResponse != null && this.props.awaitingLoginResponse === true )?'refresh':'log-in'} 
          onClick={this.login}>
            <Text>Login</Text>
        </Button>
        <div hidden={this.props.loginFailed === false} >
          <Icon icon="error" color="danger" />
          <Text>Login failed...</Text>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    awaitingLoginResponse: state.user.awaitingLoginResponse,
    loginFailed: state.user.loginAttemptFailed,
  };
};

const mapDispatchToProps = (dispatch) => ({
  sendLogin: (email, passwordHash) => {
    dispatch(SendLogin(email, passwordHash));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
