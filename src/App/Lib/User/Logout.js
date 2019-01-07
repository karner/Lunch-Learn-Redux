import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Heading, Text } from 'evergreen-ui';

class Logout extends Component {
  render() {
    return (
      <div style={this.props.style}>
        <Heading>Logout</Heading>
        <Text>Hi {this.props.userName}!</Text>
        <br/>
        <Button iconBefore='log-out' >
            <Text>Logout </Text>
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.user.userName,
  };
};

export default connect(mapStateToProps)(Logout);
