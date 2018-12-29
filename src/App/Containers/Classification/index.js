import React, { Component } from 'react';
import { Card, Heading } from 'evergreen-ui';
import UserComponent from '../User';
import Classification  from "./Classification";

class ClassificationComponent extends Component {
  render() {
    return (
      <div style={this.props.style}>
          <Card background='white' padding='16px' marginTop='32px' marginLeft='auto' marginRight='auto' width='120px'>
            <Heading>Land Cover Classifier</Heading>
          </Card>
          <UserComponent />
          <Classification />
      </div>
    );
  }
}

export default ClassificationComponent;
