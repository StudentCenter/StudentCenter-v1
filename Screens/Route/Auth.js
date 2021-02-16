import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Auth/LoginScreen';
import RegisterScreen from '../Auth/RegisterScreen';

function Auth() {
    const Stack = createStackNavigator();

    return(
        <>
            <Stack.Navigator
                initialRouteName='LoginScreen'
            >
                <Stack.Screen
                    name='LoginScreen'
                    component={LoginScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name='RegisterScreen'
                    component={RegisterScreen}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </>
    )
}

export default Auth