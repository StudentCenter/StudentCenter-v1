/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {StyleSheet, Text, View, ScrollView, Image, Switch} from 'react-native';
import {Card} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SettingScreen = () => {
  return (
    <>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
          {/* Box 1 */}
          <Card style={styles.box}>
            <Text style={{textAlign: 'center', marginTop: '30%'}}>test1</Text>
          </Card>

          <Text style={styles.textmore}>More Setting</Text>

          {/* Box 2 */}
          <Card style={styles.box2}>
            <View style={styles.viewmore}>
              <Image
                source={require('../Asset/Image/darkmode.png')}
                style={styles.imagedark}
              />
              <Text
                style={{
                  marginTop: '8%',
                  fontSize: 15,
                  marginLeft: '15%',
                  marginRight: '17%',
                }}>
                Dark Mode
              </Text>
              <Switch />
            </View>
          </Card>

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
    marginTop: 15,
  },
  box: {
    backgroundColor: 'white',
    height: hp('40%'),
    width: wp('90%'),
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
    height: hp('40%'),
    width: wp('90%'),
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
    marginTop: '15%',
    fontWeight: 'bold',
    paddingBottom: '10%',
  },
  textmore: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginTop: '5%',
    marginLeft: '5%',
  },
  viewmore: {
    flexDirection: 'row',
    padding: 15,
  },
  imagedark: {
    width: 80,
    height: 80,
  },
});

export default SettingScreen;
