import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Exercise from '../components/Exercise';

export default function Workout( { route, navigation } ) {

    const addHandler = () => {
        route.params.addExercise(route.params.day)
        navigation.setParams((prevparams) => {
            return prevparams
        })
    }

    /**
     * Renders a list of all exercises for a given day as well as a button to add more exercises. 
     */
    return(
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList 
                    data={route.params.renderData}
                    renderItem={
                    ({item}) => (
                        <Exercise item={item} />
                    )
                    }
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={addHandler}>
                    <View style={styles.bottomButtons}>
                        <Text style={styles.buttonText}>Add exercise</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E0E0',
    },
    list: {
        flex: 9,
        padding: 10,
        marginLeft: 10,
        marginRight: 10
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        color: 'white'
    },
    bottomButtons: {
        backgroundColor: '#585858',
        borderRadius: 5
    }
});