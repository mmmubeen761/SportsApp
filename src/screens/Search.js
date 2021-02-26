import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Search(props) {

    return (
        <>
            <View style={styles.container}>
                <ImageBackground source={require('../images/search1.jpg')} style={styles.image}>
                    <View style={styles.midcont}>
                        <FontAwesome onPress={() => props.navigation.openDrawer()}
                            style={{ textAlign: 'left', padding: 20 }}
                            name="bars"
                            color="white"
                            size={30}
                        />
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', padding: 20 }}>Search
                        </Text>
                        <FontAwesome onPress={() => props.navigation.navigate('Filters')}
                            style={{ textAlign: 'right', padding: 20 }}
                            name="sliders"
                            color="white"
                            size={30}
                        />
                    </View>
                </ImageBackground>

            </View>

            <View style={styles.maincont} >
                <ScrollView>

                    <View style={styles.midcont} >

                        <View style={styles.views} >
                            <TouchableOpacity onPress={() => props.navigation.navigate('SearchAddidas')}>
                                <Image source={{ uri: 'https://static.highsnobiety.com/thumbor/Dlh0IXpfsroEYkPeg4h9FT0Sjyc=/1600x1067/static.highsnobiety.com/wp-content/uploads/2012/08/06171644/replacement-logos-01.jpg' }} style={styles.image} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.views}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('SearchAddidas')}>
                                <Image source={{ uri: 'https://i0.wp.com/deltacollegian.net/wp-content/uploads/2017/05/adidas.png?fit=880%2C660' }} style={styles.image} />
                            </TouchableOpacity>
                            {/* <Text style={{ fontSize: 20 }}>Company 2</Text> */}
                        </View>
                    </View>
                    <View style={styles.midcont}>
                        <View style={styles.views}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('SearchAddidas')}>
                                <Image source={{ uri: 'https://about.underarmour.com/sites/default/files/2020-03/UA_Logo_Blk_R_0.png' }} style={styles.image} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.views}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('SearchAddidas')}>
                                <Image source={{ uri: 'https://static.highsnobiety.com/thumbor/Dlh0IXpfsroEYkPeg4h9FT0Sjyc=/1600x1067/static.highsnobiety.com/wp-content/uploads/2012/08/06171644/replacement-logos-01.jpg' }} style={styles.image} />
                            </TouchableOpacity>
                            {/* <Text style={{ fontSize: 20 }}>Company 2</Text> */}
                        </View>
                    </View>
                    <View style={styles.midcont}>
                        <View style={styles.views}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('SearchAddidas')}>
                                <Image source={{ uri: 'https://static.highsnobiety.com/thumbor/Dlh0IXpfsroEYkPeg4h9FT0Sjyc=/1600x1067/static.highsnobiety.com/wp-content/uploads/2012/08/06171644/replacement-logos-01.jpg' }} style={styles.image} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.views}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('SearchAddidas')}>
                                <Image source={{ uri: 'https://i0.wp.com/deltacollegian.net/wp-content/uploads/2017/05/adidas.png?fit=880%2C660' }} style={styles.image} />
                            </TouchableOpacity>
                            {/* <Text style={{ fontSize: 20 }}>Company 2</Text> */}
                        </View>
                    </View>
                    <View style={styles.midcont}>
                        <View style={styles.views}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('SearchAddidas')}>
                                <Image source={{ uri: 'https://about.underarmour.com/sites/default/files/2020-03/UA_Logo_Blk_R_0.png' }} style={styles.image} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.views}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('SearchAddidas')}>
                                <Image source={{ uri: 'https://lh3.googleusercontent.com/proxy/hJ8yWMieQ5PvNudnGSk4wJNimYPE0LXsjpzyvBgjxy6FqlNyVKJuN-4r8VO1rvZUMgLasv1YLyybQqRYQK08aPOVaTMTW66GlhGudA6iBAcvl7uAJzVNHnpGqO9eaGue' }} style={styles.image} />
                            </TouchableOpacity>
                            {/* <Text style={{ fontSize: 20 }}>Company 2</Text> */}
                        </View>
                    </View>
                    <View style={styles.midcont}>
                        <View style={styles.views}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('SearchAddidas')}>
                                <Image source={{ uri: 'https://static.highsnobiety.com/thumbor/Dlh0IXpfsroEYkPeg4h9FT0Sjyc=/1600x1067/static.highsnobiety.com/wp-content/uploads/2012/08/06171644/replacement-logos-01.jpg' }} style={styles.image} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.views}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('SearchAddidas')}>
                                <Image source={{ uri: 'https://i0.wp.com/deltacollegian.net/wp-content/uploads/2017/05/adidas.png?fit=880%2C660' }} style={styles.image} />
                            </TouchableOpacity>
                            {/* <Text style={{ fontSize: 20 }}>Company 2</Text> */}
                        </View>
                    </View>
                    <View style={styles.midcont}>
                        <View style={styles.views}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('SearchAddidas')}>
                                <Image source={{ uri: 'https://about.underarmour.com/sites/default/files/2020-03/UA_Logo_Blk_R_0.png' }} style={styles.image} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.views}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('SearchAddidas')}>
                                <Image source={{ uri: 'https://lh3.googleusercontent.com/proxy/hJ8yWMieQ5PvNudnGSk4wJNimYPE0LXsjpzyvBgjxy6FqlNyVKJuN-4r8VO1rvZUMgLasv1YLyybQqRYQK08aPOVaTMTW66GlhGudA6iBAcvl7uAJzVNHnpGqO9eaGue' }} style={styles.image} />
                            </TouchableOpacity>
                            {/* <Text style={{ fontSize: 20 }}>Company 2</Text> */}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    );
}


export default Search;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    midcont: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        margin: 10
    },
    setting: {
        // flex: 1,
        backgroundColor: '#fff'
    },
    views: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        // padding: 30,
        resizeMode: "cover",
        justifyContent: "center",
        flex: 1,
        // height: 100
        margin: 10
    },
    splashscreenimage: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
    }, image: {
        flex: 1,
        justifyContent: "center",
        resizeMode: "contain",
        height: 150
    }, maincont: {
        flex: 3,
    }
});