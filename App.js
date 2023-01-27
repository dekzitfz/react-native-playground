import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Detailpage from './src/screens/detailpage';
import Homepage from './src/screens/homepage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: Platform.OS === 'ios'}}>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name='Detail' component={Detailpage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;