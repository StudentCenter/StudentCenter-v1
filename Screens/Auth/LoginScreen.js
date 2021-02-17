import * as React from 'react';
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    Image
 } from 'react-native';
import { 
    TextInput,
    Button,
    Text,
    useTheme
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
    const API_URL = `http://localhost:8000`;
    const paperTheme = useTheme()

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
            console.log(resp)
            const setItemUser = await AsyncStorage.setItem('user_name', resp.result.username)
            console.log(setItemUser)
            if (resp.message === 'login_success') {
                console.log(resp.result.username)
                navigation.replace('Landing')
            } else {
                console.log('Please check your username or password')
                alert('Your username or password is not correct!')
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
            marginTop: wp('5%'),
            marginLeft: wp('5%')
        },
        iconpassword: {
           position: 'absolute',
           marginLeft: wp('80%'),
           marginTop: wp('8%')
        },
        inputpassword: {
            width: wp('90%'),
            height: hp('10%'),
            backgroundColor: paperTheme.colors.title,
            fontWeight: 'bold',
        }
    })

    return(
        <>
            <View
                style={{
                    marginTop: wp('15%'),
                    marginLeft: wp('5%')
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: wp('8%'),
                        fontWeight: 'bold'
                    }}
                >
                Welcome 
                </Text>
                <Text
                    style={{
                        color: 'white',
                        fontSize: wp('8%'),
                        fontWeight: 'bold'
                    }}
                >
                Back, 
                </Text>
                <Text
                    style={{
                        color: 'white',
                        fontSize: wp('8%'),
                        fontWeight: 'bold'
                    }}
                >
                People
                </Text>
            </View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 150,
                        zIndex: 5,
                    }}
                >
                <TextInput
                    mode='flat'
                    label='username'    
                    placeholder='johndoe'
                    onChangeText={(username) => setUsername(username)}
                    underlineColor='#2F80ED'
                    selectionColor='#2F80ED'
                    style={{
                        width: wp('90%'),
                        height: hp('10%'),
                        backgroundColor: paperTheme.colors.title,
                        marginLeft: wp('5%'),
                        fontWeight: 'bold',
                    }}
                />
                <View style={styles.passwordcontainer}>
                    <TextInput
                        label='password'
                        secureTextEntry={showpassword}
                        style={styles.inputpassword}
                        onChangeText={(password) => setPassword(password)}
                        placeholder='12345***'
                        underlineColor='#2F80ED'
                        selectionColor='#2F80ED'
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
                <Text
                    style={{
                        color: '#2F80ED',
                        marginTop: wp('3%'),
                        fontWeight: 'bold',
                        right: -230
                    }}
                >
                    Forgot Password?
                </Text>
            </View>
                <Button
                    onPress={() => handleLogin()}
                    mode='contained'
                    style={{
                        borderRadius: 10,
                        width: wp('90%'),
                        height: hp('8.5%'),
                        backgroundColor: paperTheme.colors.backgroundauth,
                        alignContent: 'center',
                        position: 'absolute',
                        zIndex: 2,
                        marginLeft: wp('5%'),
                        bottom: 20
                        
                    }}
                    labelStyle={{
                        color: 'white',
                        marginTop: wp('5%'), 
                        fontWeight: 'bold' 
                    }}
                >
                    Login
                </Button>
            <Image
                source={require('../../Asset/Image/gelombang.png')}
                style={{
                    bottom: wp('-20%'),
                }}
            />
        </>
    )
}

export default LoginScreen