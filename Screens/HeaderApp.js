/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet, Text, View} from 'react-native';

function HeaderApp({navigation, previous}) {
  return (
    <>
      <View style={{backgroundColor: '#ffffff'}}>
        <Appbar.Header style={styles.header}>
          {previous ? (
            <>
              <Appbar.BackAction onPress={navigation.goBack} />
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: '#40537E'}}>
                Setting Profile
              </Text>
            </>
          ) : (
            <Appbar.Content title="Title" />
          )}
          {!previous ? (
            <>
              <Appbar.Action icon="bell" style={styles.bellIcon} />
              <Appbar.Action icon="magnify" style={styles.searchIcon} />
              <Appbar.Action
                icon="dots-vertical"
                onPress={() => navigation.navigate('Setting')}
              />
            </>
          ) : null}
        </Appbar.Header>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
  },
  searchIcon: {
    marginRight: '-3%',
  },
  bellIcon: {
    marginRight: '-2%',
  },
});

export default HeaderApp;
