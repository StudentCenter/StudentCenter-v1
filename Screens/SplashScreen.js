import * as React from 'react';
import { 
    Text,
 } from 'react-native';
import { 
    Button
 } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

function SplashScreen({navigation}) {
    const fetchLoginData = async () => {
        try {
            const data = await AsyncStorage.getItem('user_name').then((value) => navigation.replace(
                value === null ? 'Auth' : 'Landing'
            ))
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        fetchLoginData()
    })

    return(
        <>
        <Text>
            Hii People!
        </Text>
        <Button
            onPress={() => navigation.navigate('Auth')}
            mode='contained'
        >
            Login
        </Button>
        
        </>
    )
}

export default SplashScreen