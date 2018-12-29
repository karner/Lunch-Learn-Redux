import React, { Component } from 'react';
import { Button, Heading, Icon, Text, TextInput } from 'evergreen-ui';

class Login extends Component {
  render() {
    return (
      <div style={this.props.style}>
        <Heading>Login</Heading>
        <TextInput width='200px'/>
        <TextInput width='200px' type='password'/>
        <Button>
            <Text>Login </Text>
            <Icon icon='log-in' />
        </Button>
      </div>
    );
  }
}

export default Login;
