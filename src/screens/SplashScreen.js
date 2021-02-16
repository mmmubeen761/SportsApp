import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
 
function SplashScreen() {

    return (
        <>
        <View style={styles.splashscreen}>
            <Image source={require('../images/logo.png')}
            style={styles.splashscreenimage}
            />
        </View>
        </>
    );
}


export default SplashScreen;


const styles = StyleSheet.create({
    splashscreen: {
        flex: 1,
        height:'100%',
        width:'100%',
        backgroundColor:'#7e95e0'
    },
    splashscreenimage:{
        resizeMode: 'contain',
        flex:1,
        width:'100%',
        height:50
    }
});