import * as React from 'react';
import { 
    Text,
 } from 'react-native';
import { 
    Button
 } from 'react-native-paper';

function SplashScreen({navigation}) {
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