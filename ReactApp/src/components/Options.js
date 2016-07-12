import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    ListView,
    Text
} from 'react-native';

import Row from './Row';

export default class Options extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.entries)
        };
    }

    componentWillReceiveProps(props){
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.setState ({
            dataSource: ds.cloneWithRows(props.entries)
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Row name={rowData}/>}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});