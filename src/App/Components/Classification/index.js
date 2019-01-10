import React, { Component } from 'react';
import { connect } from "react-redux";
import { Card, Combobox, Heading } from 'evergreen-ui';
import { RefreshLegends } from './Legends/Reducers/Actions';
import LegendItems from './LegendItems';

class Classification extends Component {
  constructor() {
    super();
    this.state = {
      selectedLegend: null
    }
  }

  componentDidMount() {
    this.props.getLegends();
  }

  render() {
    return (
      <div style={this.props.style}>
          <Card background='white' padding='16px' marginLeft='32px' width='300px' pointerEvents='auto' float='left'>
            <Heading>Classification</Heading>
            <Combobox
              items={this.props.legends == undefined ? [] : this.props.legends} 
              onChange={selected => this.setState({selectedLegend: selected})}
              itemToString={(item)=>(item == undefined)?"":item.name}              
              placeholder='Legend'/>
            <LegendItems items={this.state.selectedLegend} />
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
