import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Slider from '@react-native-community/slider';
import { Slider } from 'react-native';


function NewEmail(props) {
    // const UselessTextInputMultiline = () => {
    const [value, onChangeText] = React.useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ');
    // }
    return (
        <>

            <View style={styles.container}>
                <View style={styles.setting}>
                    <View style={styles.header}>
                        <FontAwesome onPress={() => props.navigation.goBack()}
                            style={{ textAlign: 'right', paddingRight: 20, paddingTop: 20 }}
                            name="close"
                            color="black"
                            size={30}
                        />
                        <Text style={{ color: 'black', fontSize: 25, alignSelf: 'center', fontWeight: 'bold' }}>NEW EMAIL
                             </Text>
                    </View>
                    <ScrollView>
                        <View style={styles.settingtext}>
                            <TextInput
                                placeholder="To:"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />
                            <TextInput
                                placeholder="Cc/Bcc:"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />
                            <TextInput
                                placeholder="From:"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />
                            <TextInput
                                placeholder="Subject:"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                            />
                            <View
                                style={{
                                    backgroundColor: value,
                                    borderColor: '#000000',
                                    borderWidth: 1,
                                    margin: 10
                                }}>
                                <TextInput
                                    multiline
                                    numberOfLines={8}
                                    onChangeText={text => onChangeText(text)}
                                    value={value}
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                        >
                            <Text style={{ color: 'white' }}>SEND</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>

        </>
    );
}


export default NewEmail;


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
        borderBottomWidth: 1,
        paddingLeft: 10,
        marginLeft: 15,
        borderRadius: 5,
        marginRight: 15
    },
    button: {
        alignItems: "center",
        backgroundColor: "#0273a3",
        padding: 15,
        margin: 20,
        borderRadius: 5
    },
});