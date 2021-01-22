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
  Text, 
} from 'react-native-paper';
import FabMore from './Screens/FabMore.js'

const HomeRoute = () => 
<>
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>home</Text>
</View>
<FabMore/>
</>
;

const CalendarRoute = () => 
<>
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>calendar</Text>
</View>
<FabMore/>
</>
;

const UserRoute = () => 
<>
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>user</Text>
</View>
<FabMore/>
</>
;

const PPDBRoute = () => 
<>
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>PPDB</Text>
</View>
<FabMore/>
</>
;

const EskulRoute = () => 
<>
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>Eskul</Text>
</View>
<FabMore/>
</>
;



function App() {
  const [navigationIndex, setNavigationIndex] = React.useState(0)
  const [navigationRoutes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'calendar', title: 'Calendar', icon: 'calendar-blank' },
    { key: 'user', title: 'User', icon: 'account' },
    { key: 'ppdb', title: 'PPDB', icon: require('./Asset/Image/library_add.png')},
    { key: 'eskul', title: 'ESKUL', icon: require('./Asset/Image/mdi_basketball.png') },
  ])

  return (
    <>
    <BottomNavigation
      shifting={true}
      labeled={false}
      barStyle={{backgroundColor: '#FFFFFF'}}
      activeColor="#2F80ED"
      inactiveColor="#88A1C8"
      navigationState={{ index: navigationIndex, routes: navigationRoutes }}
      onIndexChange={index => setNavigationIndex(index)}
      renderScene={ BottomNavigation.SceneMap({
        home: HomeRoute,
        calendar: CalendarRoute,
        user: UserRoute,
        ppdb: PPDBRoute,
        eskul: EskulRoute,
      })}
    />
    </>
  );
}



export default App
