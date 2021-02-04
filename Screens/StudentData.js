/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, FAB, Card, useTheme} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StudentData = () => {
  const paperTheme = useTheme();
  return (
    <>
      <ScrollView>
        {/* View Sort */}
        <View style={styles.containersort}>
          <MaterialCommunityIcons
            name="text-subject"
            color={paperTheme.colors.text}
            size={30}
          />
          <Card
            style={{
              width: wp('20%'),
              shadowColor: '#FFFFFF',
              borderRadius: 15,
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 25,
              shadowRadius: 15,
              elevation: 5,
            }}>
            <Text
              style={{
                marginTop: wp('1%'),
                marginLeft: wp('2.5%'),
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              XII RPL 1
            </Text>
          </Card>
        </View>

        {/* View Data Siswa */}
        <View style={styles.container}>
          <Card style={styles.colums}>
            <Card style={styles.images} />
          </Card>
          <Card style={styles.colums}>
            <Card style={styles.images} />
          </Card>
          <Card style={styles.colums}>
            <Card style={styles.images} />
          </Card>
          <Card style={styles.colums}>
            <Card style={styles.images} />
          </Card>
          <Card style={styles.colums}>
            <Card style={styles.images} />
          </Card>
          <Card style={styles.colums}>
            <Card style={styles.images} />
          </Card>
          <Card style={styles.colums}>
            <Card style={styles.images} />
          </Card>
          <Card style={styles.colums}>
            <Card style={styles.images} />
          </Card>
          <Card style={styles.colums}>
            <Card style={styles.images} />
          </Card>
          <Card style={styles.colums}>
            <Card style={styles.images} />
          </Card>
        </View>
      </ScrollView>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => console.log('Pressed')}
      />
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#2F80ED',
  },
  container: {
    flex: 1,
    marginTop: wp('2'),
    marginLeft: wp('5'),
    marginBottom: wp('5'),
  },
  colums: {
    marginTop: hp('2%'),
    width: wp('90%'),
    height: hp('12%'),
    flexDirection: 'column',
    shadowColor: '#FFFFFF',
    borderRadius: 15,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 25,
    shadowRadius: 15,
    elevation: 5,
  },
  images: {
    backgroundColor: '#C4C4C4',
    width: wp('18%'),
    height: hp('9.5%'),
    marginTop: wp('2.5%'),
    marginLeft: wp('2%'),
    borderRadius: 15,
  },
  containersort: {
    flex: 1,
    marginTop: wp('2'),
    marginLeft: wp('5'),
    flexDirection: 'row',
  },
});

export default StudentData;
