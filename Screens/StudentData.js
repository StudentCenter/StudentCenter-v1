/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, FAB, Card} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const StudentData = () => {
  return (
    <>
      <ScrollView>
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
    marginTop: 10,
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
    marginTop: wp('2'),
    marginLeft: wp('2'),
    borderRadius: 15,
  },
});

export default StudentData;
