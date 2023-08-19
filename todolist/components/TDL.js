import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.taskContainer}>
            <Text>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    taskContainer : {
        backgroundColor: '#FCBAAD',
        marginVertical: 5,
        padding: 20,
        borderRadius: 30
    }
})

export default Task;