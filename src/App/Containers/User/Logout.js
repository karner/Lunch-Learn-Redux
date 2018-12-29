import React, { Component } from 'react';
import { Button, Heading, Icon, Text } from 'evergreen-ui';

class Login extends Component {
  render() {
    return (
      <div style={this.props.style}>
        <Heading>Logout</Heading>
        <Text>Hi username!</Text>
        <br/>
        <Button>
            <Text>Logout </Text>
            <Icon icon='log-out' />
        </Button>
      </div>
    );
  }
}

export default Login;
