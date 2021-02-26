import React,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function EmailTwo(props) {

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
                    <ImageBackground source={require('../images/email1.jpg')} style={styles.image}>
                        <View style={styles.midcont}>
                            <FontAwesome onPress={() => props.navigation.openDrawer()}
                                style={{ textAlign: 'left', padding: 20 }}
                                name="bars"
                                color="white"
                                size={30}
                            />
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', padding: 20, alignItems: 'center' }}>EMAIL
                                 </Text>
                            <Text>&nbsp; &nbsp; &nbsp; &nbsp; </Text>
                        </View>
                        <View style={styles.midcont}>
                            <Text style={show} onPress={()=>shide()}>Business/Organization
                            </Text>
                            <Text style={hide} onPress={()=>sshow()}>Athletes/Individual
                            </Text>
                        </View>
                        <View style={styles.setting}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('NewEmail')}>
                                <Text
                                    style={styles.textInput2}
                                >Search</Text>
                            </TouchableOpacity>
                            <View style={styles.textInput} >
                                <Text style={{ fontSize: 20 }} >Name </Text><Text style={{ textAlign: 'right', fontSize: 20 }}> 10/1/2020</Text>
                            </View>
                            <View style={styles.textInput}>
                                <Text style={{ fontSize: 20 }}>Name </Text><Text style={{ textAlign: 'right', fontSize: 20 }}> 20/1/2020</Text>
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


export default EmailTwo;


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
        color: 'white',
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 25,
        backgroundColor: "#0273a3",
        paddingTop: 10,
        paddingBottom: 10
    },
});