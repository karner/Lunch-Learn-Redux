import React, { Component } from 'react';
import { connect } from "react-redux";
import { Card, Combobox, Heading } from 'evergreen-ui';
import { RefreshLegends } from './Legends/Reducers/Actions';

class Classification extends Component {
  componentDidMount() {
    this.props.getLegends();
  }

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

const mapStateToProps = (state) => {
  return {
    legends: state.legends.legends,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getLegends: () => {
    dispatch(RefreshLegends());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Classification);
