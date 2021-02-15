/* eslint-disable no-shadow */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  useTheme
} from 'react-native-paper';
import HeaderApp from './Screens/HeaderApp';
import HomeScreen from './Screens/HomeScreen';
import StudentAttandance from './Screens/StudentAttandance';
import StudentData from './Screens/StudentData';
import DetailSiswa from './Screens/DetailSiswa';
import EkskulData from './Screens/EkskulData';
import PPDBData from './Screens/PPDBData';
import SettingScreen from './Screens/SettingScreen';
import {AuthContext} from './components/context';

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

function App() {
  const Stack = createStackNavigator();
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  // Default Theme
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#FFFFFF',
      text: '#000000',
      backgroundmodal: '#FFFFFF',
      textinput: '#EEEEEE'
    },
  };

  // Dark Mode Theme
  const CustomDarkModeTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#121212',
      text: '#FFFFFF',
      backgroundmodal: '#2B2B2B',
      textinput: '#2B2B2B'
    },
  };

  const theme = isDarkTheme ? CustomDarkModeTheme : CustomDefaultTheme;

  const authContext = React.useMemo(
    () => ({
      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    [],
  );
  return (
    <>
      <PaperProvider theme={theme}>
        <AuthContext.Provider value={authContext}>
          <NavigationContainer theme={theme}>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                header: (props) => <HeaderApp {...props} />,
                studentdata: (props) => <StudentData {...props}/>,
              }}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Setting Profile" component={SettingScreen} />
              <Stack.Screen name="Detail Siswa" component={DetailSiswa} />
            </Stack.Navigator>
          </NavigationContainer>
        </AuthContext.Provider>
      </PaperProvider>
    </>
  );
}

export default App;
