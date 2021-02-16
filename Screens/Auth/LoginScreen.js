import * as React from 'react';
import { 
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
  
 } from 'react-native';
import { 
    TextInput,
    Button
 } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';

function LoginScreen({navigation}) {
    const [showpassword, setShowPassword] = React.useState(true)
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const API_URL = `http://localhost:8000`;

    const handleShow = () => {
        setShowPassword(!showpassword)
    }
    
    const fetchLogin = async () => {
        if (!username) {
            alert('Please Fill Username First')
        }

        if (!password) {
            alert('Please Fill Password First')
        }
        try {
            let dataToSend = {username: username, password: password};
            let formBody = [];
            for (let key in dataToSend) {
              let encodedKey = encodeURIComponent(key);
              let encodedValue = encodeURIComponent(dataToSend[key]);
              formBody.push(encodedKey + '=' + encodedValue);
            }
            formBody = formBody.join('&');
            const data = await fetch(`${API_URL}/login`, {
                method: 'POST',
                body: formBody,
                headers: {
                    //Header Defination
                    'Content-Type':
                    'application/x-www-form-urlencoded;charset=UTF-8',
                  },
            })
            const resp = await data.json()
            if (resp.success) {
                AsyncStorage.setItem('username', resp.result.username)
                console.log(resp.result.username)
                navigation.replace('Landing')
            } else {
                console.log('Please check your username or password')
            }
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }

    const handleLogin = () => {
        fetchLogin()
    }

    // Styles
    const styles = StyleSheet.create({
        passwordcontainer: {
            flexDirection: 'row',
        },
        iconpassword: {
           position: 'absolute',
           marginLeft: wp('90%'),
           marginTop: wp('8%')
        },
        inputpassword: {
            width: wp('100%'),
            height: hp('10%'),
        }
    })


    return(
        <>
            <Text>
                this login screen
            </Text>
            <TextInput
                label='username'    
                placeholder='johndoe'
                onChangeText={(username) => setUsername(username)}
            />

            <View style={styles.passwordcontainer}>
                <TextInput
                    label='password'
                    secureTextEntry={showpassword}
                    style={styles.inputpassword}
                    onChangeText={(password) => setPassword(password)}
                    placeholder='12345***'
                />
                <TouchableOpacity
                    onPress={handleShow}
                    style={styles.iconpassword}
                >
                {showpassword 
                    ?
                    <MaterialCommunityIcons name='eye' size={wp('5%')} />
                    :
                    <MaterialCommunityIcons name='eye-off' size={wp('5%')} />
                }
                </TouchableOpacity>
            </View>
            
            <Button
                onPress={() => handleLogin()}
                mode='contained'
            >
                Login
            </Button>

        </>
    )
}

export default LoginScreen