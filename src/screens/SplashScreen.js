import React from 'react';
import { View, StyleSheet, Image,ImageBackground } from 'react-native';
 
function SplashScreen(props) {
    
    setTimeout(() => {
        props.navigation.navigate('GetStartedScreen1') 
     }, 3000);
   
   
   
    return (
        <>
        <ImageBackground source={require('../images/bg.png')} style={styles.image}>

        <View style={styles.splashscreen}>
            <Image source={require('../images/Logo-White.png')}
            style={styles.splashscreenimage}
            />
        </View>
            </ImageBackground>
        </>
    );
}


export default SplashScreen;


const styles = StyleSheet.create({
    splashscreen: {
        flex: 1,
        height:'100%',
        width:'100%',
        // backgroundColor:'#7e95e0'
    },
    splashscreenimage:{
        resizeMode: 'contain',
        flex:1,
        width:'80%',
        alignSelf:'center'
        // height:50
    }, image: {
        // flex: 1,
        resizeMode: "contain",
        // justifyContent: "center",
        height: '100%'
    },
});