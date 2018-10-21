import React from "react"
import {View, Text, Image} from "react-native"

const ItemDetails = () => (
    <View>
        <Text>Item Details</Text>
        <Image
        style={{width: 50,height: 50}}
            source={{
                uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
            }}/>
    </View>
)

export default ItemDetails