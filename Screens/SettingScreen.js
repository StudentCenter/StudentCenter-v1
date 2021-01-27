import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

const SettingScreen = () => {
    return(
        <>
            <View 
                style={styles.container}
            >
                <View
                style={styles.box}
                >
<Text>Test</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    box: {
        backgroundColor: '#E2EEFF',
        height: '40%',
        width: '90%',
        marginLeft: '5%',
        borderRadius: 20
    }
})

export default SettingScreen