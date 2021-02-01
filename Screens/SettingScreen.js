/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {Card, TouchableRipple, useTheme} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AuthContext} from '../components/context';

const SettingScreen = () => {
  const paperTheme = useTheme();
  const {toggleTheme} = React.useContext(AuthContext);
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Box 1 */}
        <Card style={styles.box}>
          <Text style={{textAlign: 'center', marginTop: '30%'}}>test1</Text>
        </Card>

        <Text style={styles.textmore}>More Setting</Text>

        {/* Box 2 */}
        <Card style={styles.box2}>
          <View style={styles.viewmore}>
            {/* Dark mode menu */}
            <Image
              source={require('../Asset/Image/darkmode.png')}
              style={styles.image}
            />
            <Text
              style={{
                marginTop: '6%',
                fontSize: 15,
                textAlign: 'center',
                marginLeft: 50,
                fontWeight: 'bold',
              }}>
              Dark Mode
            </Text>
            <Switch
              style={{
                marginLeft: 50,
              }}
              value={paperTheme.dark}
              onValueChange={() => {
                toggleTheme();
              }}
            />
          </View>

          <View style={styles.viewmore}>
            {/* Notification menu */}
            <Image
              source={require('../Asset/Image/notif.png')}
              style={styles.image}
            />
            <Text
              style={{
                marginTop: '6%',
                fontSize: 15,
                textAlign: 'center',
                marginLeft: 50,
                fontWeight: 'bold',
              }}>
              Notification
            </Text>
            <Switch
              style={{
                marginLeft: 40,
              }}
            />
          </View>

          <TouchableOpacity>
            <View style={styles.viewmore}>
              {/* Logout menu */}
              <Image
                source={require('../Asset/Image/logout.png')}
                style={styles.image}
              />
              <Text
                style={{
                  marginTop: '6%',
                  fontSize: 15,
                  textAlign: 'center',
                  marginLeft: 50,
                  marginRight: 70,
                  fontWeight: 'bold',
                }}>
                Logout
              </Text>
              <Image
                source={require('../Asset/Image/arrow_right.png')}
                style={styles.arrowlogout}
              />
            </View>
          </TouchableOpacity>
        </Card>

        {/* Text Version */}
        <Text style={styles.version}>App V1.1 Beta</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  box: {
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
    height: hp('45%'),
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
    fontSize: 12,
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
    justifyContent: 'center',
    padding: 15,
    marginTop: 5,
  },
  image: {
    width: 60,
    height: 60,
  },
  arrowlogout: {
    width: 30,
    height: 30,
    marginTop: 15,
    marginLeft: '5%',
  },
});

export default SettingScreen;
