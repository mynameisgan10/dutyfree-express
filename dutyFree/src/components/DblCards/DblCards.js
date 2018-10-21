import React from 'react'
import { View, StyleSheet} from 'react-native'
import Card from "./Card/Card";

const styles = StyleSheet.create({
    dbleCards: {
        flexDirection: 'row'
    }
})
const DbleCards = (props) => (
    <View style={styles.dbleCards}>
        <Card {...props}/>
        <Card {...props}/>
    </View>
)


export default DbleCards