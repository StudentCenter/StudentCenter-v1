import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import {Card} from 'react-native-paper';

const SettingScreen = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            {/* Box 1 */}
            <Card style={styles.box}>
              <Text>test1</Text>
            </Card>

            <Text style={styles.textmore}>More Setting</Text>

            {/* Box 2 */}
            <Card style={styles.box2}>
              <View style>
                <Image source={require('../Asset/Image/darkmode.png')} />
              </View>
            </Card>

            {/* Text Version */}
            <Text style={styles.version}>App V1.1 Beta</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffffff',
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
  },
});

export default SettingScreen;
