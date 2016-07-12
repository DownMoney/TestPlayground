import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

export default class Row extends Component {
    render() {
        return (
            <Text>{this.props.name}</Text>
        );
    }
};