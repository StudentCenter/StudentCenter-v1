import * as React from 'react';
import { 
    Image,
    View,
 } from 'react-native';
import {
    ProgressBar,
    Text,
 } from 'react-native-paper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
 } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';

function SplashScreen({navigation}) {
    const [progress, setProgress] = React.useState(0.1)
    const fetchLoginData = async () => {
        try {
            const data = await AsyncStorage.getItem('user_name').then((value) => navigation.replace(
                value === null ? 'LandingScreen' : 'Landing'
            ))
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        setTimeout(() => {
            if (progress < 1) {
                setProgress(progress + 0.1)
            } else {
                fetchLoginData()
            }
        }, 500)
    })

    return(
        <>
            <View
                style={{
                    alignItems: 'center',
                }}
            >
                <Image
                    source={require('../Asset/Image/student.gif')}
                    style={{
                        width: wp('70%'),
                        height: hp('40'),
                        marginTop: wp('20%')
                    }}
                />
                <ProgressBar
                    progress={progress}
                    color='#2F80ED'
                    style={{
                        marginTop: '20%',
                        width: wp('50'),
                        borderRadius: 20
                    }}
                />
                <Text
                    style={{
                        position: 'absolute',
                        bottom: wp('-50%'),
                        fontWeight: 'bold'
                    }}
                >
                    App ver 1.1 beta
                </Text>
            </View>
        </>
    )
}

export default SplashScreen