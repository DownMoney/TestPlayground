import React, {
    Component
} from 'react';

import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

export default class Row extends Component {
    render() {
        return (
            <TouchableHighlight onPress={() => {
                this.props.vote(this.props.name, this.props.userID)
            }}>
                <View style={styles.container}>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.votes}>{this.props.votes}</Text>
                </View>
            </TouchableHighlight>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    votes: {
        width: 30,
    },
    name: {
        flex: 1,
        marginLeft: 20
    }
});