import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Contacts(props) {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.setting}>
                    <ImageBackground source={require('../images/contact1.jpg')} style={styles.image}>
                        <View style={styles.midcont}>
                            <FontAwesome
                                style={{ textAlign: 'left', padding: 20 }}
                                name="bars"
                                color="white"
                                size={30}
                            />
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', padding: 20, alignItems: 'center' }}>CONTACTS
                                 </Text>
                            <Text>&nbsp; &nbsp; &nbsp; &nbsp; </Text>

                        </View>
                        <View style={styles.midcont}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, padding: 20, alignItems: 'center', borderBottomWidth: 3, borderBottomColor: 'white', marginBottom: '17%' }}>Business/Organization
                            </Text>
                            <Text onPress={() => props.navigation.navigate('Contacts')} style={{ color: 'white', fontWeight: 'bold', fontSize: 15, padding: 20, alignItems: 'center' }}>Athletes/Individual
                            </Text>
                        </View>
                        <View style={styles.setting}>
                            {/* <ScrollView> */}

                                <FontAwesome onPress={() => props.navigation.navigate('AddContact')}
                                    style={styles.textInput2}
                                    name="plus"
                                    color="white"
                                    size={30}
                                />
                                <View style={styles.textInput}>
                                    <Text style={{ fontSize: 20 }} onPress={() => props.navigation.navigate('Contact')}>Name </Text><Text style={{ textAlign: 'right', fontSize: 20 }}> 10/1/2020</Text>
                                </View>
                                <View style={styles.textInput}>
                                    <Text style={{ fontSize: 20 }} onPress={() => props.navigation.navigate('Contact')}>Name </Text><Text style={{ textAlign: 'right', fontSize: 20 }}> 20/1/2020</Text>
                                </View>
                                <View style={styles.textInput}>
                                    <Text style={{ fontSize: 20 }}>Name </Text><Text style={{ textAlign: 'right', fontSize: 20 }}> 30/1/2020</Text>
                                </View>
                                <View style={styles.textInput}>
                                    <Text style={{ fontSize: 20 }}>Name </Text><Text style={{ textAlign: 'right', fontSize: 20 }}> 30/1/2020</Text>
                                </View>
                                <View style={styles.textInput}>
                                    <Text style={{ fontSize: 20 }}>Name </Text><Text style={{ textAlign: 'right', fontSize: 20 }}> 30/1/2020</Text>
                                </View>
                                <View style={styles.textInput}>
                                    <Text style={{ fontSize: 20 }}>Name </Text><Text style={{ textAlign: 'right', fontSize: 20 }}> 30/1/2020</Text>
                                </View>
                                <View style={styles.textInput}>
                                    <Text style={{ fontSize: 20 }}>Name </Text><Text style={{ textAlign: 'right', fontSize: 20 }}> 30/1/2020</Text>
                                </View>

                            {/* </ScrollView> */}
                        </View>
                    </ImageBackground>
                </View>

            </View>
        </>
    );
}


export default Contacts;


const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1
    },
    midcont: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    setting: {
        flex: 1,
        backgroundColor: '#fff'
    },
    textInput: {
        color: 'black',
        paddingLeft: 10,
        paddingRight: 10,
        // margin: 25,
        marginTop: 15,
        marginBottom: 15,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        // flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, image: {
        // flex: 1,
        resizeMode: "contain",
        // justifyContent: "center",
        height: '50%'
    }, textInput2: {
        borderColor: 'white',
        // borderWidth: 1,
        padding: 15,
        borderRadius: 80,
        backgroundColor: "#0273a3",
        alignSelf: 'center'
    },
});