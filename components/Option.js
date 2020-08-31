import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Option({ text, press }) {

    /**
     * Button like comp with a given text
     */
    return(
        <TouchableOpacity style={styles.box} onPress={press}>
            <Text style={styles.text} >{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#585858',
        justifyContent: 'center',
        shadowOffset:{  width: 5,  height: 5,  },
        shadowColor: 'black',
        shadowOpacity: .5,
        shadowRadius: 15,

    },  
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})