import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Day from '../components/Day';

export default function Workout({ navigation }) {

    const dayHandler = (data, text) => {
        navigation.navigate('DayPage', {renderData: data, day: text, addExercise: addExercise})
    }

    const [counter, setcounter] = useState(1)

    const changeDay = () => {
        var last = day[day.length - 1];

        setcounter((prevcounter) => {
            if(prevcounter == last.dayNumber) {
                return 1;
            } else {
                return prevcounter + 1;
            }
        })
    }

    const dayListChange = (id) => {
        if(id == 'add') {
            setday((prevday) => {
                return [
                    ...prevday,
                    {
                        dayNumber: prevday.length + 1,
                        data: [],
                        key: prevday.length + 1
                    }
                ]
            })
        } else {
            setday((prevday) => {
                if(prevday.length == 1) {
                    return [...prevday]
                }
                prevday.pop();
                return [...prevday]
            })
        }
    }

    const [day, setday] = useState([
        {
            dayNumber: 1,
            data: [{
                name: 'Bench Press',
                sets: 3,
                reps: 5,
                weight: 135,
                notes: 'Focus heavy and with form. Push with chest',
                key: 0
            },
            {
                name: 'Squat',
                sets: 5,
                reps: 5,
                weight: 135,
                notes: 'Focus on form',
                key: 1
            },
            {
                name: 'Shoulder Press',
                sets: 3,
                reps: 8,
                weight: 135,
                notes: 'Push with shoulders, not legs.',
                key: 2
            },],
            key: 1
        },
        {
            dayNumber: 2,
            data: [],
            key: 2
        },
        {
            dayNumber: 3,
            data: [],
            key: 3
        }
    ])

    const addExercise = (dayNum) => {
        setday((prevday) => {
            let arr = [...prevday];
            for(let i = 0; i < arr.length; i++) {
                if(arr[i].dayNumber == dayNum) {
                    arr[i].data.push({
                        name: '',
                        sets: 0,
                        reps: 0,
                        weight: 0,
                        notes: '',
                        key: Math.floor((Math.random() * 100000) + 1)
                    })
                }
            }
            return arr;
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.counter}>
                <View style={styles.counterContainer}>
                    <Text style={styles.counterText}>Current Day: {counter}</Text>
                </View>
            </View>
            <View style={styles.list}>
                <FlatList
                    data={day}
                    renderItem={({item}) => (
                        <View style={styles.wrapper}>
                            <Day text={item.dayNumber} pressDay={dayHandler} data={item.data} />
                        </View>
                    )}
                
            />
            </View>
            <View style={styles.complete}>
                <TouchableOpacity onPress={() => dayListChange('add')}>
                    <View style={styles.bottomButtons}>
                        <Text style={styles.buttonText}>+</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={changeDay}>
                    <View style={styles.bottomButtons}>
                        <Text style={styles.buttonText}>Finish Day</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dayListChange('remove')}>
                    <View style={styles.bottomButtons}>
                        <Text style={styles.buttonText}>-</Text>
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
    counter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },  
    counterText: {
        fontSize: 32,
        fontWeight: 'bold',

    },
    counterContainer: {
        borderBottomWidth: 3
    },
    list: {
        flex: 9,
    },
    wrapper: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: 'center',
    },
    bottomButtons: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 2,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10
    },
    complete: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});