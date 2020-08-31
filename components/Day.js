import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Day( {text, pressDay, data} ) {

    return (
        <TouchableOpacity onPress={() => pressDay(data, text)}>
            <View style={styles.box}>
                <Text style={styles.text}>Day {text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#585858',
        marginTop: 20,
    },  
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})