/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Appbar, useTheme} from 'react-native-paper';
import {StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

function HeaderApp({navigation, previous}) {
  const paperTheme = useTheme();
  const route = useRoute();
  
  return (
    <>
      <View>
        <Appbar.Header style={{backgroundColor: 'transparent'}}>
          {previous ? (
            <>
              <Appbar.BackAction
                onPress={navigation.goBack}
                color={paperTheme.colors.text}
                useNativeDriver={true}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: paperTheme.colors.text,
                }}>
                {route.name}
              </Text>
            </>
          ) : (
            <Appbar.Content title="Title" color={paperTheme.colors.text} />
          )}
          {!previous ? (
            <>
              <Appbar.Action
                icon="bell"
                style={styles.bellIcon}
                color={paperTheme.colors.text}
              />
              <Appbar.Action
                icon="magnify"
                style={styles.searchIcon}
                color={paperTheme.colors.text}
              />
              <Appbar.Action
                icon="dots-vertical"
                onPress={() => navigation.navigate('Setting Profile')}
                color={paperTheme.colors.text}
                useNativeDriver={true}
              />
            </>
          ) : null}
        </Appbar.Header>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  searchIcon: {
    marginRight: '-3%',
  },
  bellIcon: {
    marginRight: '-2%',
  },
});

export default HeaderApp;
