import React, { Component } from 'react';
import { Card, Combobox, Heading } from 'evergreen-ui';

class Classification extends Component {
  render() {
    return (
      <div style={this.props.style}>
          <Card background='white' padding='16px' marginLeft='32px' width='300px' pointerEvents='auto' float='left'>
            <Heading>Classification</Heading>
            <Combobox items={['hey','there']} placeholder='Legend'/>
          </Card>
      </div>
    );
  }
}

export default Classification;
