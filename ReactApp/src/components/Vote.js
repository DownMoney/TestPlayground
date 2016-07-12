import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import * as actions from '../actions';
import {connect} from 'react-redux';

import InputField from './InputField';
import Options from './Options';


export default class Vote extends Component {
    render() {
        return (
            <View style={styles.container}>
                <InputField {...this.props} />
                <Options {...this.props} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    }
});

function mapStateToProps(state) {
    let entries = !!state.reducer.get('entries') ? state.reducer.get('entries').toJS() : [];
    console.log(entries);
    return {
        entries: entries
    };
}

export const VotingContainer = connect(
    mapStateToProps,
    actions
)(Vote);