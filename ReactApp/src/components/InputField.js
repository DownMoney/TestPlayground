import React, {Component} from 'react';
import {
    View,
    TextInput,
    TouchableHighlight,
    StyleSheet,
    Text
} from 'react-native';


export default class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Placeholder'
        };
    }
    
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textBox}
                           onChangeText={(text) => this.setState({text})}
                           value={this.state.text}
                />
                <TouchableHighlight onPress={() => {this.props.add({name: this.state.text})}} style={styles.addButton}>
                    <Text>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        height: 30,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    textBox: {
        flex: 1,
        backgroundColor: '#CCC'
    },
    addButton: {
        width: 80,
        height: 30,
        backgroundColor: '#c3c3c3',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
