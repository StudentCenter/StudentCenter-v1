/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';
import {AuthContext} from './components/context';
import SplashScreen from './Screens/SplashScreen';
import Auth from './Screens/Route/Auth';
import DrawerNavigation from './Screens/Route/DrawerNavigation';
import LandingScreen from './Screens/LandingScreen';

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
      textinput: '#EEEEEE',
      title: '#FFFFFF',
      subtitle: '#CFCFCF',
      backgroundauth: '#2F80ED',
      calendarBackground: '#FFFFFF',
      calendarDay: '#333333',
      calendarTitle: '#000000'
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
      textinput: '#2B2B2B',
      title: '#000000',
      subtitle: '#CFCFCF',
      backgroundauth: '#000000',
      calendarBackground: '#121212',
      calendarDay: '#FFFFFF',
      calendarTitle: '#FFFFFF'
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
              initialRouteName='SplashScreen'
            >
              <Stack.Screen 
                name='SplashScreen'
                component={SplashScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name='LandingScreen'
                component={LandingScreen}
                options={{
                  headerShown: false,
                  cardStyle: {backgroundColor: '#2F80ED'}
                }}
              />
              <Stack.Screen
                name='Auth'
                component={Auth}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name='Landing'
                component={DrawerNavigation}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </AuthContext.Provider>
      </PaperProvider>
    </>
  );
}

export default App;
