import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Slider from '@react-native-community/slider';
import { Slider } from 'react-native';


function Contact() {

    return (
        <>
            <ScrollView>

                <View style={styles.container}>
                    <View style={styles.setting}>
                        <View style={styles.header}>
                            <FontAwesome
                                style={{ textAlign: 'right', paddingRight: 20, paddingTop: 20 }}
                                name="close"
                                color="black"
                                size={30}
                            />
                            <Text style={{ color: 'black', fontSize: 25, alignSelf: 'center', fontWeight: 'bold' }}>ADD CONTACT
                    </Text>
                        </View>
                        <View style={styles.settingtext}>
                            <TextInput
                                placeholder="Contact Name"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />
                            <TextInput
                                placeholder="Phone"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />
                            <TextInput
                                placeholder="Title (Position)"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />
                            <TextInput
                                placeholder="Name of Business/Entity"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />
                            <TextInput
                                placeholder="Industry"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />
                            <TextInput
                                placeholder="Type of Business"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />
                            <TextInput
                                placeholder="Geographic Location"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />
                            <TextInput
                                placeholder="Notes"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />

                            <TextInput
                                placeholder="Connection"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />
                            <TextInput
                                placeholder="First Contact"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />
                            <Text style={{alignSelf:'center',fontSize:15}}>How well do you know about this person?</Text>
                            <Slider
                                style={{ width: 350, height: 20, }}
                                minimumValue={0}
                                maximumValue={1}
                                minimumTrackTintColor="black"
                                maximumTrackTintColor="#000000"
                                thumbProps={{
                                    children: (
                                      <FontAwesome
                                        name="heartbeat"
                                        type="font-awesome"
                                        size={20}
                                        reverse
                                        containerStyle={{ bottom: 20, right: 20 }}
                                        color="#f50"
                                      />
                                    ),
                                  }}
                            />
                            <View style={{flex:1,flexDirection:'row', justifyContent: 'space-between' }}>
                            <Text style={{fontSize:20,padding:10,color:'blue'}}>Cold</Text>
                            <Text style={{fontSize:20,padding:10 ,color:'red' }}>Warm</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Text style={{ color: 'white' }}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </>
    );
}


export default Contact;


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
    },
    button: {
        alignItems: "center",
        backgroundColor: "#1c4485",
        padding: 15,
        margin: 20,
        borderRadius: 5
    },
});