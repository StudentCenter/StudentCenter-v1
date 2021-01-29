import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SettingScreen = () => {
    return(
        <>
            <View 
                style={styles.container}
            >

                {/* Box 1 */}
                <View
                style={styles.box}
                >
                    <Text>Test1</Text>
                </View>
                
                <Text
                    style={styles.textmore}
                >
                    More Setting
                </Text>

                {/* Box 2 */}
                <View
                style={styles.box2}
                >
                    <Text>Test2</Text>
                </View>

                {/* Text Version */}
                <Text 
                    style={styles.version}
                >
                        App V1.1 Beta
                </Text>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    box: {
        backgroundColor: '#E2EEFF',
        height: '40%',
        width: '90%',
        marginLeft: '5%',
        borderRadius: 20
    },
    box2: {
        backgroundColor: '#E2EEFF',
        height: '40%',
        width: '90%',
        marginLeft: '5%',
        borderRadius: 20,
        marginTop: '5%'
    },
    version: {
        textAlign: 'center',
        marginTop: '5%',
        fontWeight: 'bold'
    },
    textmore: {
        fontSize: 17, 
        fontWeight: 'bold',
        color: '#40537E',
        marginTop: '5%',
        marginLeft: '5%'
    }
})

export default SettingScreen