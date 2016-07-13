import React, {
    Component
} from 'react';

import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

export default class Row extends Component {
    render() {
        return (
            <TouchableHighlight onPress={() => {this.props.vote(this.props.name, this.props.userID)}}>
                <Text>{this.props.name}</Text>
            </TouchableHighlight>
        );
    }
};