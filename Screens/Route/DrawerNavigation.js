import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { 
    useTheme
} from 'react-native-paper';
import HeaderApp from '../HeaderApp';
import HomeScreen from '../HomeScreen';
import StudentAttandance from '../StudentAttandance';
import StudentData from '../StudentData';
import DetailSiswa from '../DetailSiswa';
import EkskulData from '../EkskulData';
import PPDBData from '../PPDBData';
import SettingScreen from '../SettingScreen';

function Home() {
    const paperTheme = useTheme();
    const Tab = createMaterialBottomTabNavigator();
  
    return (
      <>
        <Tab.Navigator
          initialRouteName="Home"
          labeled={false}
          barStyle={{
            backgroundColor: paperTheme.colors.backgroundmodal,
            shadowColor: '#FFFFFF',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 30,
            shadowRadius: 30,
            elevation: 20,
          }}
          activeColor="#2F80ED"
          inactiveColor="#88A1C8"
          sceneAnimationEnabled={true}
          useNativeDriver={true}
          >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={20} />
              ),
            }}
          />
          <Tab.Screen
            name="Student Attandance"
            component={StudentAttandance}
            options={{
              tabBarLabel: 'Student Attandance',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="calendar-blank"
                  color={color}
                  size={20}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Student Data"
            component={StudentData}
            options={{
              tabBarLabel: 'Student Data',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={20}
                />
              ),
            }}
          />
          <Tab.Screen
            name="PPDB"
            component={PPDBData}
            options={{
              tabBarLabel: 'PPDB',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="file-plus"
                  color={color}
                  size={20}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Ekskul"
            component={EkskulData}
            options={{
              tabBarLabel: 'Ekskul',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="basketball"
                  color={color}
                  size={20}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </>
    );
  }

function DrawerNavigation() {
    const Stack = createStackNavigator();

    return(
        <>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                studentdata: (props) => <StudentData {...props}/>,
              }}>
              <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{
                  header: (props) => <HeaderApp {...props} />
                }} 
              />
              <Stack.Screen name="Setting Profile" component={SettingScreen} />
              <Stack.Screen name="Detail Siswa" component={DetailSiswa} />
            </Stack.Navigator>
        </>
    )
}

export default DrawerNavigation