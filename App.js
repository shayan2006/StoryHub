import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';

export default class App extends React.Component {
  render(){
    return (

       <AppContainer />
       
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  ReadStoryScreen: {screen: ReadStoryScreen},
  WriteStoryScreen: {screen: WriteStoryScreen},
});

const AppContainer = createAppContainer(TabNavigator);


