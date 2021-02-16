/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = () => {
  const [dataUser, setDataUser] = React.useState('')

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('user_name')
      console.log(data)
      setDataUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getData()
  })

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{dataUser}</Text>
      </View>
    </>
  );
};

export default HomeScreen;
