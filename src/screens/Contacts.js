import React,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

function Contacts(props) {

    const [show,setShow] = useState({color: 'white', fontWeight: 'bold', fontSize: 15, padding: 15, alignItems: 'center',borderBottomWidth: 3, borderBottomColor: 'white', marginBottom: 61 })
    const [hide,setHide] = useState({color: 'white', fontWeight: 'bold', fontSize: 15, padding: 15, alignItems: 'center' })
    
    function shide(){
        setHide({color: 'white', fontWeight: 'bold', fontSize: 15, padding: 15, alignItems: 'center',});
        setShow({color: 'white', fontWeight: 'bold', fontSize: 15, padding: 15, alignItems: 'center',borderBottomWidth: 3, borderBottomColor: 'white', marginBottom: 61 })
    }
    function sshow(){
        setShow({color: 'white', fontWeight: 'bold', fontSize: 15, padding: 15, alignItems: 'center',});
        setHide({color: 'white', fontWeight: 'bold', fontSize: 15, padding: 15, alignItems: 'center',borderBottomWidth: 3, borderBottomColor: 'white', marginBottom: 61 })
   }
    
    return (
        <>
            <View style={styles.container}>
                <View style={styles.setting}>
                    <ImageBackground source={require('../images/contact1.jpg')} style={styles.image}>
                        <View style={styles.midcont}>
                            <FontAwesome  onPress={() => props.navigation.openDrawer()}
                                style={{ textAlign: 'left', padding: 20 }}
                                name="bars"
                                color="white"
                                size={30}
                            />
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', padding: 20, alignItems: 'center' }}>CONTACTS
                                 </Text>
                            <Text>&nbsp; &nbsp; &nbsp; &nbsp; </Text>

                        </View>
                        {/* borderBottomWidth: 3, borderBottomColor: 'white', marginBottom: 61  */}
                        {/* onPress={() => props.navigation.navigate('EmailTwo')} */}
                        <View style={styles.midcont}>
                            <Text style={show} onPress={()=>shide()}>Business/Organization
                            </Text>
                            <Text  style={hide} onPress={()=>sshow()}>Athletes/Individual
                            </Text>
                        </View>
                        <View style={styles.setting}>

                                <FontAwesome onPress={() => props.navigation.navigate('AddContact')}
                                    style={styles.textInput2}
                                    name="plus"
                                    color="white"
                                    size={25}
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
        backgroundColor: '#fff',
    },
    textInput: {
        color: 'black',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 15,
        marginBottom: 15,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
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
        paddingLeft: 18,
        borderRadius: 30,
        backgroundColor: "#0273a3",
        alignSelf: 'center',
        paddingRight:18,
        paddingTop:15,
        paddingBottom:15
    },
});