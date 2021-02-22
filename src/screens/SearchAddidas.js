import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function SearchAddidas(props) {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.setting}>
                    <View style={styles.header}>
                        <FontAwesome
                            style={{ textAlign: 'left', padding: 20 }}
                            name="bars"
                            color="black"
                            size={30}
                        />
                        <Text style={{ color: 'black', fontSize: 25, alignSelf: 'center', fontWeight: 'bold' }}>Search
                        </Text>
                        <FontAwesome onPress={() => props.navigation.goBack()}
                            style={{ textAlign: 'right', padding: 20 }}
                            name="close"
                            color="black"
                            size={30}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                    <Image source={require('../images/search2.jpg')}
                        style={styles.splashscreenimage}
                    />
                    </View>
                    <View style={styles.setting}>
                        <Text style={{ color: 'black', fontSize: 25, alignSelf: 'center', fontWeight: 'bold' }}>Adidas
                       </Text>
                        <View style={styles.textInput}>
                            <Text style={{ fontSize: 20 }}>Company 1</Text>
                        </View>
                        <View style={styles.textInput}>
                            <Text style={{ fontSize: 20 }}>Company 2</Text>
                        </View>
                        <View style={styles.textInput}>
                            <Text style={{ fontSize: 20 }}>Company 3</Text>
                        </View>
                        <View style={styles.textInput}>
                            <Text style={{ fontSize: 20 }}>Company 3</Text>
                        </View>

                    </View>
                </View>

            </View>
        </>
    );
}


export default SearchAddidas;


const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    setting: {
        flex: 3,
        backgroundColor: '#fff'
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
    splashscreenimage: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
    }
});