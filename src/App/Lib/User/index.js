import React, { Component } from 'react';
import { Card } from 'evergreen-ui';

import Login from './Login';
import Logout from './Logout';

class UserComponent extends Component {
  render() {
    return (
      <div style={this.props.style}>
          <Card background='white' padding='16px' marginRight='32px' width='250px' pointerEvents='auto' float='right'>
            <Login />
            <Logout />
          </Card>
      </div>
    );
  }
}

export default UserComponent;
