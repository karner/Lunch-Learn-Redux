import React, { Component } from 'react';
import { connect } from "react-redux";
import { Card } from 'evergreen-ui';

import Login from './Login';
import Logout from './Logout';

class UserComponent extends Component {
  render() {
    return (
      <div style={this.props.style}>
          <Card background='white' padding='16px' marginRight='32px' width='250px' pointerEvents='auto' float='right'>
            {
              (this.props.loggedIn) ? <Logout/> : <Login/>
            }            
          </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
  };
};

export default connect(mapStateToProps)(UserComponent);
