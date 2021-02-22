import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Picker } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Slider from '@react-native-community/slider';
import { Slider } from 'react-native';


function AddContact(props) {
    const [selectedValue, setSelectedValue] = useState("Athletes/Individual");
    return (
        <>
            {/* <ScrollView> */}

            <View style={styles.container}>
                <View style={styles.setting}>
                    <View style={styles.header}>
                        <FontAwesome onPress={() => props.navigation.goBack()}
                            style={{ textAlign: 'right', paddingRight: 20, paddingTop: 20 }}
                            name="close"
                            color="black"
                            size={30}
                        />
                        <Text style={{ color: 'black', fontSize: 25, alignSelf: 'center', fontWeight: 'bold' }}>ADD CONTACT
                             </Text>
                    </View>
                    <ScrollView>

                        <View style={styles.settingtext}>
                            <View style={{ borderWidth: 1, margin: 10, borderRadius: 5, backgroundColor: '#ededed' }}>
                                <Picker
                                    mode={'dropdown'}
                                    selectedValue={selectedValue}
                                    style={styles.textInput2}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Athletes/Individual" value="Athletes/Individual" />
                                    <Picker.Item label="Business/Organization" value="Business/Organization" />
                                </Picker>
                            </View>
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
                                placeholder="Profession"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />
                            <TextInput
                                placeholder="Describe Profession"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />

                            <Text style={{ alignSelf: 'center', fontSize: 15 }}>How well do you know about this person?</Text>
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
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 20, padding: 10, color: 'blue' }}>Cold</Text>
                                <Text style={{ fontSize: 20, padding: 10, color: 'red' }}>Warm</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Text style={{ color: 'white' }}>SUBMIT</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

            </View>
            {/* </ScrollView> */}
        </>
    );
}


export default AddContact;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
    header: {
        color: '#fff',
        backgroundColor: '#fff'
    },
    setting: {
        flex: 1,
        backgroundColor: '#fff',

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
    textInput2: {
        color: 'black',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#0273a3",
        padding: 15,
        margin: 20,
        borderRadius: 5
    },
});