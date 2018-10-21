import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 200,
        alignSelf: "flex-start",
        marginBottom: 20
    },
    imageContainer: {
        flex: 1,
        flexDirection: "row",
        alignSelf: "center"
    },
    image: {
        width: 100,
        height: 100,
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 20,
        textAlign: "center"
    },
    subtitleText: {
        fontSize: 15,
        textAlign: "center"
    }
})

const Card = (props) => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.container}>
            <View style={{
                    alignItems: "center"
                }}>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
                    }}/>
            </View>
            <Text style={styles.titleText}>{props.title}</Text>
            <Text style={styles.subtitleText}>{props.desc}</Text>
        </View>
    </TouchableOpacity>
)

export default Card