import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Email() {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.setting}>
                    <ImageBackground source={{ uri: 'http://www.iba.edu.pk/studentssocieties/images/img28.jpg' }} style={styles.image}>
                        <View style={styles.midcont}>

                                <Image source={require('../images/logo.png')}
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
                                <Text style={{ color: 'black', fontSize: 15, alignSelf: 'flex-end', paddingRight: 10, textAlign: 'right',fontWeight:'bold' }}>Forgoten your password?
                            </Text>
                            <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', paddingTop: 20, textAlign: 'center' }}>By loging, you are agree to RAK  Bridges <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}> Privacy Policy</Text> and <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>Terms of Use</Text>.
                            </Text>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                <Text style={{ color: 'white' }}>LOG IN</Text>
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', paddingBottom: 50, textAlign: 'center' }}>Not a member? <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold'}}> Join now</Text>
                            </Text>
                        </View>
                    </ImageBackground>

                </View>

            </View>
        </>
    );
}


export default Email;


const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1
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
        backgroundColor: "#1c4485",
        padding: 15,
        margin: 20,
        borderRadius: 5,
        marginTop:40
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
        height: 30,
        alignSelf:'center'
    }
});