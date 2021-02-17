import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Auth/LoginScreen';
import RegisterScreen from '../Auth/RegisterScreen';
import { 
    useTheme
 } from 'react-native-paper';

function Auth() {
    const Stack = createStackNavigator();
    const paperTheme = useTheme()

    return(
        <>
            <Stack.Navigator
                initialRouteName='LoginScreen'
            >
                <Stack.Screen
                    name='LoginScreen'
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                        cardStyle: {backgroundColor: paperTheme.colors.backgroundauth}
                    }}
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