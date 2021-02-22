import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Filters(props) {

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
                        <Text style={{ color: 'black', fontSize: 25, alignSelf: 'center', fontWeight: 'bold' }}>Filters
                    </Text>
                    </View>
                    <ScrollView>
                        <View style={styles.settingtext}>

                            <View style={styles.textInput}>
                                <Text style={{ fontSize: 20 }}>Keyword 1</Text>
                            </View>
                            <View style={styles.textInput}>
                                <Text style={{ fontSize: 20 }}>Keyword 2</Text>
                            </View>
                            <View style={styles.textInput}>
                                <Text style={{ fontSize: 20 }}>Keyword 3</Text>
                            </View>
                            <View style={styles.textInput}>
                                <Text style={{ fontSize: 20 }}>Keyword 4</Text>
                            </View>
                            <View style={styles.textInput}>
                                <Text style={{ fontSize: 20 }}>Keyword 5</Text>
                            </View>
                            <View style={styles.textInput}>
                                <Text style={{ fontSize: 20 }}>Keyword 6</Text>
                            </View>
                            <View style={styles.textInput}>
                                <Text style={{ fontSize: 20 }}>Keyword 7</Text>
                            </View>
                            <View style={styles.textInput}>
                                <Text style={{ fontSize: 20 }}>Keyword 8</Text>
                            </View>
                            <TouchableOpacity onPress={() => props.navigation.goBack()}
                                style={styles.button}
                            >
                                <Text style={{ color: 'white' }}>APPLY</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                </View>

            </View>
        </>
    );
}


export default Filters;


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
        // borderRadius: 70,
        alignSelf: 'center',
        borderBottomColor: 'black'
    },
    textInput: {
        color: 'black',
        paddingLeft: 10,
        margin: 25,
        marginTop: 15,
        marginBottom: 15,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    button: {
        alignItems: "center",
        backgroundColor: "#0273a3",
        padding: 15,
        margin: 20,
        borderRadius: 5
    },
});