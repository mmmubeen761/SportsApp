import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Login(props) {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.setting}>
                    <ImageBackground source={require('../images/login-bg.jpg')} style={styles.image}>
                        <View style={styles.midcont}>
                            <ScrollView>
                                <Image source={require('../images/final-logo.png')}
                                    style={styles.splashscreenimage}
                                />
                                <TextInput
                                    placeholder="Email Address"
                                    placeholderTextColor="black"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                />
                                <TextInput
                                    placeholder="Password"
                                    placeholderTextColor="black"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                />
                                <Text style={{ color: 'black', fontSize: 15, alignSelf: 'flex-end', paddingRight: 10, textAlign: 'right', fontWeight: 'bold' }} onPress={() => props.navigation.navigate('ResetPwd')}>Forgoten your password?
                            </Text>
                                <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', paddingTop: 20, textAlign: 'center' }}>By loging, you are agree to RAK  Bridges <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}> Privacy Policy</Text> and <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>Terms of Use</Text>.
                            </Text>
                                <TouchableOpacity onPress={() => props.navigation.navigate('Navigation')}
                                    style={styles.button}
                                >
                                    <Text style={{ color: 'white' }}>LOG IN</Text>
                                </TouchableOpacity>
                                <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', paddingBottom: 50, textAlign: 'center' }}>Not a member? <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }} onPress={() => props.navigation.navigate('CreateAccount')}> Join now</Text>
                                </Text>
                            </ScrollView>
                        </View>
                    </ImageBackground>

                </View>

            </View>
        </>
    );
}


export default Login;


const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        alignSelf:'center'
    }, image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    setting: {
        flex: 1,
        backgroundColor: '#fff'
    },
    textInput: {
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 10,
        margin: 15,
        borderRadius: 5,
        marginTop: 0,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#0273a3",
        padding: 15,
        margin: 20,
        borderRadius: 5,
        marginTop: 40
    }, midcont: {
        flex: 1,
        marginTop: '20%',
        marginBottom: '20%',
        marginLeft: '5%',
        marginRight: '5%',
        backgroundColor: 'white',
        borderRadius: 20,
    }, splashscreenimage: {
        resizeMode: 'contain',
        flex: 1,
        width: '70%',
        height: 100,
        alignSelf: 'center',
        marginTop:30,
        marginBottom:30
    }
});