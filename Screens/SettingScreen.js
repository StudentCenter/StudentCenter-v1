/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {StyleSheet, Text, View, ScrollView, Image, Switch} from 'react-native';
import {Card} from 'react-native-paper';

const SettingScreen = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {/* Box 1 */}
          <Card style={styles.box}>
            <Text>test1</Text>
          </Card>

          <Text style={styles.textmore}>More Setting</Text>

          {/* Box 2 */}
          <Card style={styles.box2}>
            <View style={styles.viewmore}>
              <Image source={require('../Asset/Image/darkmode.png')} />
              <Text
                style={{
                  marginTop: '7%',
                  fontSize: 17,
                  marginLeft: '20%',
                  marginRight: '20%',
                }}>
                Dark Mode
              </Text>
              <Switch />
            </View>
          </Card>

          <Switch />

          {/* Text Version */}
          <Text style={styles.version}>App V1.1 Beta</Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  box: {
    backgroundColor: 'white',
    height: 220,
    width: '90%',
    marginLeft: '5%',
    borderRadius: 20,
    shadowColor: '#FFFFFF',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 25,
    shadowRadius: 15,
    elevation: 5,
  },
  box2: {
    backgroundColor: 'white',
    width: '90%',
    height: 220,
    marginLeft: '5%',
    borderRadius: 20,
    marginTop: '5%',
    shadowColor: '#FFFFFF',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 25,
    shadowRadius: 15,
    elevation: 5,
  },
  version: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: '10%',
    fontWeight: 'bold',
    paddingBottom: '10%',
  },
  textmore: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#40537E',
    marginTop: '5%',
    marginLeft: '5%',
  },
  viewmore: {
    flexDirection: 'row',
    padding: 15,
  },
});

export default SettingScreen;
