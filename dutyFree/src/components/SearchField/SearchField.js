import React from 'react'
import {TextInput, StyleSheet, View, Platform} from 'react-native'

const styles = StyleSheet.create({
    searchContainer: {
        height: 40,
        width: 500,
        borderColor: "lightgrey",
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderRightWidth: 2
    },
    searchStyle: {
        color: 'black',
        alignItems: 'center',
        fontSize: 20,
        paddingLeft: 10,
        height: Platform.OS === 'ios' ? 40 : 50
    }
})

const SearchField = (props) => (<View style={styles.searchContainer}>
    <TextInput style={styles.searchStyle} {...props}/>
</View>)

export default SearchField