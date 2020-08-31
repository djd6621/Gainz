import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Option from '../components/Option';

export default function Home( {navigation} ) {

    const programHandler = () => {
        navigation.navigate('Your Programs')
    }

    /*
      Page navigator handler for going to the list of days
    */
    const workoutHandler = () => {
        navigation.navigate("Workout")
    }

    /**
     * Renders a main view with an Option component.
     */
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                {/* <Option text="Programs" press={programHandler}/> */}
                <Option text="Workout" press={workoutHandler}/>
                {/* <Option text="Boxing" /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E0E0E0'
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: 'center'
  },  
});