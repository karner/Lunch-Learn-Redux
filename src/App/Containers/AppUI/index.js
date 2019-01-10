import React, { Component } from 'react';
import { Card, Heading } from 'evergreen-ui';
import UserComponent from '../../Components/User';
import Classification  from "../../Components/Classification";
import "../../Themes/theme.css";

class AppUI extends Component {
  render() {
    return (
      <div style={this.props.style} className='this.props.className' children>
          <Card background='white' padding='16px' marginTop='32px' marginLeft='auto' marginRight='auto' width='120px'>
            <Heading>Geo-Wiki Lite</Heading>
          </Card>
          <UserComponent />
          <Classification />
      </div>
    );
  }
}

export default AppUI;
