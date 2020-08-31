import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Exercise( { item }) {

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.topLeft}>
                        <Text style={styles.titleText}>{item.name}</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.edit}>
                            <Text>Edit</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.delete}>
                            <Text>Remove</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.middle}>
                    <View style={styles.third}>
                        <Text>Sets: {item.sets}</Text>
                    </View>
                    <View style={styles.third}>
                        <Text>Reps: {item.reps}</Text>
                    </View>
                    <View style={styles.third}>
                        <Text>Weight: {item.weight}</Text>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Text>Notes: {item.notes}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 9,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        marginTop: 15,
        backgroundColor: 'white'
    },
    top: {
        flex: 1,
        padding: 5,
        flexDirection: 'row'
    },
    topLeft: {
        flex: 2
    },
    edit: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 5,
    },
    delete: {
        flex: 1,
        alignItems:'flex-end'
    },
    middle: {
        flex: 1,
        flexDirection: 'row',
        borderTopWidth: 2,
        borderTopColor: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        padding: 5
    },
    bottom: {
        flex: 1,
        padding: 5
    },
    third: {
        flex: 1
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18
    }
})