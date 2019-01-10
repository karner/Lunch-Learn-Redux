import React, { Component } from 'react';
import { Button, Text } from 'evergreen-ui';

class LegendItems extends Component {

    render(){
        let items = [];
        if (this.props.items == null) return null;
        const l1items = this.props.items.items.filter(item => (item.level == 1 || item.level == null));
        l1items.forEach(item => {
            items.push(
                <Button style={{ display: 'block', margin: '0 auto' }}>
                    <Text>{item.name}</Text>
                </Button>
            );
        });
        return(
            <div style={{maxHeight: '450px', overflowY: 'scroll'}}>
                {items}
            </div>
            );
    };
}

export default LegendItems;
