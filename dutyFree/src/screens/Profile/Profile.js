import React from 'react'
import {Text,View, StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "palevioletred",
    fontSize: 50
  }
})

const Profile = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Profile</Text>
        </View>
      );
}

export default Profile