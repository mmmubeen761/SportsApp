import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function ResetPwd() {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.setting}>
                    <View style={styles.header}>
                        <FontAwesome
                            style={{ textAlign: 'right', paddingRight: 20, paddingTop: 20 }}
                            name="close"
                            color="black"
                            size={30}
                        />
                        <Text style={{ color: 'black', fontSize: 25, alignSelf: 'center', paddingTop: 50, fontWeight: 'bold' }}>RESET PASSWORD
                    </Text>
                        <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', paddingTop: 20, textAlign: 'center' }}>Enter your email to receive instruction on how to reset your password.
                    </Text>
                    </View>
                    <View style={styles.settingtext}>
                        <TextInput
                            placeholder="Email Address"
                            placeholderTextColor="black"
                            style={styles.textInput}
                            autoCapitalize="none"
                        />
                    </View>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Text style={{color:'white'}}>RESET</Text>
                        </TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', paddingTop: 20, textAlign: 'center' }}>Or return to <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}> Log in.</Text>
                        </Text>
                </View>

            </View>
        </>
    );
}


export default ResetPwd;


const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1
    },
    header: {
        color: '#ffffff',
        backgroundColor: '#fff'
    },
    setting: {
        flex: 1,
        backgroundColor: '#fff'
    },
    settingimage: {
        resizeMode: 'contain',
        width: '40%',
        height: 170,
        borderRadius: 70,
        alignSelf: 'center',
    }, settingtext: {

    },
    textInput: {
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 10,
        margin: 15,
        borderRadius: 5,
        marginTop: 50,
        marginBottom: 50
    },
    button: {
        alignItems: "center",
        backgroundColor: "#1c4485",
        padding: 15,
        margin:20,
        borderRadius:5
      },
});