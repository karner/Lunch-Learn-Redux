import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Heading, Text } from 'evergreen-ui';
import { Logout as LogoutAction} from './Reducers/Actions';

class Logout extends Component {

  logout = () => {
    this.props.logout();
  };

  render() {
    return (
      <div style={this.props.style}>
        <Heading>Logout</Heading>
        <Text>Hi {this.props.userName}!</Text>
        <br/>
        <Button iconBefore='log-out' onClick={this.logout} >
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

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(LogoutAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
