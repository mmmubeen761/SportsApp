import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


function CreateAccount(props) {

    const [isSelected, setSelection] = useState(false);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.setting}>
                        <ScrollView>
                    <View style={styles.header}>
                        <FontAwesome onPress={() => props.navigation.navigate('Login')}
                            style={{ textAlign: 'right', paddingRight: 20, paddingTop: 20 }}
                            name="close"
                            color="black"
                            size={30}
                        />
                        <Text style={{ color: 'black', fontSize: 25, alignSelf: 'center', paddingTop: 20, fontWeight: 'bold', textAlign: 'center' }}>YOUR ACCOUNT IS EVERYTHING FOR US
                    </Text>
                        <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', paddingTop: 20, textAlign: 'center' }}>Reference site about Lorem Ipsum, giving information on as a ran its origins, as well as a random Lipsum generator.
                    </Text>
                    </View>
                        <View style={styles.settingtext}>

                            <TextInput
                                placeholder="Email Address"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />
                            <TextInput
                                placeholder="Password   "
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />
                            <TextInput
                                placeholder="Confirm Password"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />
                            <View style={styles.checkboxContainer}>
                                <CheckBox
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    style={styles.checkbox}
                                />
                                <Text style={styles.label}>Sign up for email to hear all the latest form RAK Bridges.</Text>
                            </View>
                            <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', paddingTop: 20, textAlign: 'center' }}>By creating an account, you agree to RAK Bridges<Text style={{ textDecorationLine: 'underline' }}> Privacy Policy </Text> and<Text style={{ textDecorationLine: 'underline' }}>Terms of Use.</Text></Text>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}
                                style={styles.button}
                            >
                                <Text style={{ color: 'white' }}>CREATE ACCOUNT</Text>
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', paddingTop: 20, textAlign: 'center' }} onPress={() => props.navigation.navigate('Login')}>Already a member? <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}> Sign in.</Text>
                            </Text>
                        </View>
                    </ScrollView>
                </View>

            </View>
        </>
    );
}


export default CreateAccount;


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
    textInput: {
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 10,
        margin: 15,
        borderRadius: 5,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#0273a3",
        padding: 15,
        margin: 20,
        borderRadius: 5
    }, checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
        marginLeft: 20,
    },
    label: {
        // margin:2,
        paddingRight: 30
    },
});