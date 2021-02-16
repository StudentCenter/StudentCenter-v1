/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View, 
  StyleSheet, 
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  Text, 
  FAB, 
  Card, 
  useTheme, 
  ActivityIndicator,
} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StudentData = ({navigation}) => {
  const paperTheme = useTheme();
  const [datasiswa, setDataSiswa] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const API_URL = `http://localhost:8000`;

  // Fetch data siswa
  const fetchSiswa = async () => {
    try {
      const data = await fetch(`${API_URL}/student`, {
        method: 'GET',
      });
      const resp = await data.json();
      setDataSiswa(resp.result);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }
  
  React.useEffect(() => {
    fetchSiswa().
      then(() => {
        setLoading(true)
      })
  }, [])

  if (loading) {
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
                marginLeft: wp('2%'),
                width: wp('22%'),
                shadowColor: '#FFFFFF',
                borderRadius: wp('10%'),
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 25,
                shadowRadius: 15,
                elevation: 5,
              }}>
              <Text
                style={{
                  marginTop: wp('1.5%'),
                  marginLeft: wp('3%'),
                  fontWeight: 'bold',
                  fontSize: wp('4%'),
                }}>
                XII RPL 1
              </Text>
            </Card>
          </View>
  
          {/* View Data Siswa */}
          <View style={styles.container}>
            {datasiswa.length > 0 ? 
            datasiswa.map((item) => {
              return (
                <Card style={styles.colums} key={item.id}>
                    <View style={styles.row}>
                      <Image 
                        source={{uri: item.foto_siswa}} 
                        style={styles.images} 
                      />
                        <View style={styles.textcard}>
                          <Text style={styles.namasiswa}>{item.nama}</Text>
                          {item.kelas.length > 0 ? 
                            item.kelas.map((itemkelas) => {
                              return(
                                <View key={itemkelas.id}>
                                  <Text style={styles.kelassiswa}>{itemkelas.kelas}</Text>
                                </View>
                              )
                            })
                            :
                            <Text>Null</Text>
                          }
                        </View>
                        <TouchableOpacity
                          onPress={() => {
                              navigation.navigate('Detail Siswa', {
                                  idSiswa: item.id
                              })
                          }}
                          color='#fff'
                          style={{
                            marginTop: wp('6%'), 
                            position: 'absolute', 
                            right: wp('5%'),
                            borderRadius: 20,
                          }}>
                            <MaterialCommunityIcons
                              name="arrow-right-drop-circle"
                              color={paperTheme.colors.text}
                              size={20}
                        />
                        </TouchableOpacity>
                    </View>
                </Card>
              )
            })
            :
            <Text>No Data In Here!</Text>
          }
          </View>
        </ScrollView>

        {/* Float button */}
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => console.log('Pressed')}
        />
      </>
    );
  } else {
    return(
      <ActivityIndicator 
        animating={true} 
        color="#345EF0" 
        size={40}
        style={styles.loading} 
      />
    )
  }
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
    marginTop: wp('2%'),
    marginLeft: wp('5%'),
    marginBottom: wp('25%'),
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
    width: wp('17.5%'),
    height: hp('10%'),
    borderRadius: 15,
  },
  containersort: {
    flex: 1,
    marginTop: wp('2%'),
    marginLeft: wp('5%'),
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    marginTop: wp('2%'),
    marginLeft: wp('2%'),
  },
  namasiswa: {
    marginTop: wp('2%'),
    marginLeft: wp('3%'),
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  kelassiswa: {
    fontSize: wp('4%'),
    marginTop: wp('1%'),
    marginLeft: wp('3%'),
  },
  textcard: {
    flexDirection: 'column',
    marginTop: wp('1%'),
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StudentData;
