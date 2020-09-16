import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator, HeaderTitle} from "@react-navigation/stack";
import Home from '../screens/Home';
import Programs from '../screens/Programs';
import Workout from '../screens/Workout';
import DayPage from '../screens/DayPage';
import {StyleSheet} from 'react-native';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
    <Navigator headerMode="screen" mode='modal' >
      <Screen 
        name="Workout" 
        component={Workout} 
        options={
            {
              title: 'Days',
              headerStyle: styles.header,
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              headerTitleStyle: styles.headerText,
            }
        }
        />
      {/* <Screen 
        name="Gym Homie" 
        component={Home} 
        options={
        {
          headerStyle: styles.header,
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitleStyle: styles.headerText,
        }
        }/> */}
      {/* <Screen 
        name="Your Programs" 
        component={Programs} 
        options={
            {
              headerStyle: styles.header,
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              headerTitleStyle: styles.headerText,
            }
        }
        /> */}
        <Screen 
          name='DayPage'
          component={DayPage}
          options={
            {
              title: 'Exercises',
              headerStyle: styles.header,
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              headerTitleStyle: styles.headerText,
            }
          }
        />
    </Navigator>
  );

const styles = StyleSheet.create({
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#585858',
        borderBottomColor: 'black',
        borderBottomWidth: 3,
        borderStyle: 'solid',
    },
    headerText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
      },
})  
  
export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator />
    </NavigationContainer>
);