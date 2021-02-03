/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {Card, useTheme} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AuthContext} from '../components/context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingScreen = () => {
  const paperTheme = useTheme();
  const {toggleTheme} = React.useContext(AuthContext);
  console.log(paperTheme.dark);
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Box 1 */}
        <Card style={styles.box}>
          <Text style={{textAlign: 'center', marginTop: '30%'}}>test1</Text>
        </Card>

        <Text
          style={{
            fontSize: wp('3.5%'),
            fontWeight: 'bold',
            marginTop: '5%',
            color: paperTheme.colors.text,
            marginLeft: '5%',
          }}>
          More Setting
        </Text>

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
                fontSize: wp('4%'),
                textAlign: 'center',
                marginLeft: wp('15%'),
                fontWeight: 'bold',
                color: paperTheme.colors.text,
              }}>
              Dark Mode
            </Text>
            <Switch
              style={{
                marginLeft: wp('17%'),
                borderColor: 'black',
              }}
              value={paperTheme.dark}
              onValueChange={() => {
                toggleTheme();
              }}
              thumbColor={paperTheme.dark ? '#ffffff' : '#000000'}
              trackColor={{false: '#B2B2B2', true: '#000000'}}
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
                fontSize: wp('4%'),
                textAlign: 'center',
                marginLeft: wp('15%'),
                fontWeight: 'bold',
                color: paperTheme.colors.text,
              }}>
              Notification
            </Text>
            <Switch
              style={{
                marginLeft: wp('15.5%'),
              }}
              thumbColor={paperTheme.dark ? '#ffffff' : '#000000'}
              trackColor={{false: '#B2B2B2', true: '#000000'}}
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
                  fontSize: wp('4%'),
                  textAlign: 'center',
                  marginLeft: wp('15%'),
                  fontWeight: 'bold',
                  color: paperTheme.colors.text,
                }}>
                Logout
              </Text>

              <MaterialCommunityIcons
                name="arrow-right-drop-circle"
                color={paperTheme.colors.text}
                size={30}
                style={{marginTop: hp('2%'), marginLeft: wp('26%')}}
              />
            </View>
          </TouchableOpacity>
        </Card>

        {/* Text Version */}
        <Text
          style={{
            fontSize: wp('3%'),
            textAlign: 'center',
            marginTop: hp('5%'),
            fontWeight: 'bold',
            paddingBottom: '10%',
            color: paperTheme.colors.text,
          }}>
          App V1.1 Beta
        </Text>
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
  viewmore: {
    flexDirection: 'row',
    padding: wp('4%'),
    marginTop: hp('1.2%'),
    marginLeft: wp('1%'),
  },
  image: {
    width: wp('17'),
    height: hp('9'),
    borderRadius: 20,
  },
  arrowlogout: {
    width: 30,
    height: 30,
    marginTop: 15,
    marginLeft: '5%',
    color: 'white',
  },
});

export default SettingScreen;
