/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderApp from './Screens/HeaderApp';
import HomeScreen from './Screens/HomeScreen';
import StudentAttandance from './Screens/StudentAttandance';
import StudentData from './Screens/StudentData';
import EkskulData from './Screens/EkskulData';
import PPDBData from './Screens/PPDBData';
import SettingScreen from './Screens/SettingScreen';

function Home() {
  const Tab = createBottomTabNavigator();

  return(
    <>
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#2F80ED',
        inactiveTintColor: '#88A1C8',
        showLabel: false
      }}
      >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Student Attandance"
        component={StudentAttandance}
        options={{
          tabBarLabel: 'Student Attandance',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-blank" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Student Data"
        component={StudentData}
        options={{
          tabBarLabel: 'Student Data',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PPDB"
        component={PPDBData}
        options={{
          tabBarLabel: 'PPDB',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file-plus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Ekskul"
        component={EkskulData}
        options={{
          tabBarLabel: 'Ekskul',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="basketball" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    </>
  )
}

function App() {
  const Stack = createStackNavigator();
  
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: (props) => <HeaderApp {...props} />,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Setting" component={SettingScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}



export default App
