/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
} from 'react-native-paper';
import HeaderApp from './Screens/HeaderApp';
import HomeScreen from './Screens/HomeScreen';
import StudentAttandance from './Screens/StudentAttandance';
import StudentData from './Screens/StudentData';
import EkskulData from './Screens/EkskulData';
import PPDBData from './Screens/PPDBData';
import SettingScreen from './Screens/SettingScreen';
import {AuthContext} from './components/context';

function Home() {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#2F80ED',
          inactiveTintColor: '#88A1C8',
          showLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Student Attandance"
          component={StudentAttandance}
          options={{
            tabBarLabel: 'Student Attandance',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="calendar-blank"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Student Data"
          component={StudentData}
          options={{
            tabBarLabel: 'Student Data',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="PPDB"
          component={PPDBData}
          options={{
            tabBarLabel: 'PPDB',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="file-plus"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Ekskul"
          component={EkskulData}
          options={{
            tabBarLabel: 'Ekskul',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="basketball"
                color={color}
                size={size}
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
    },
  };

  // Dark Mode Theme
  const CustomDarkModeTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
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
              }}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Setting" component={SettingScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </AuthContext.Provider>
      </PaperProvider>
    </>
  );
}

export default App;
