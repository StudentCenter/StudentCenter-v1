/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { View } from 'react-native';
import { 
  BottomNavigation, 
} from 'react-native-paper';
import HeaderApp from './Screens/HeaderApp';
import HomeScreen from './Screens/HomeScreen';
import StudentAttandance from './Screens/StudentAttandance';
import StudentData from './Screens/StudentData';
import EkskulData from './Screens/EkskulData';
import PPDBData from './Screens/PPDBData';

function App() {
  const [navigationIndex, setNavigationIndex] = React.useState(0)
  const [navigationRoutes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'studentattandance', title: 'StudentAttandance', icon: 'calendar-blank' },
    { key: 'studentdata', title: 'StudentData', icon: 'account' },
    { key: 'ppdbdata', title: 'PPDBData', icon: require('./Asset/Image/library_add.png')},
    { key: 'ekskuldata', title: 'EkskulData', icon: require('./Asset/Image/mdi_basketball.png') },
  ])
  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'home':
        return <HomeScreen jumpTo={jumpTo} />;
      case 'studentattandance':
        return <StudentAttandance jumpTo={jumpTo} />;
      case 'studentdata':
        return <StudentData jumpTo={jumpTo} />;
      case 'ekskuldata':
        return <EkskulData jumpTo={jumpTo} />;
      case 'ppdbdata':
        return <PPDBData jumpTo={jumpTo} />;
    }
  }

  return (
    <>
    <HeaderApp/>
    <BottomNavigation
      shifting={true}
      labeled={false}
      barStyle={{backgroundColor: '#FFFFFF'}}
      activeColor="#2F80ED"
      inactiveColor="#88A1C8"
      navigationState={{ index: navigationIndex, routes: navigationRoutes }}
      onIndexChange={index => setNavigationIndex(index)}
      renderScene={renderScene}
    />
    </>
  );
}



export default App
