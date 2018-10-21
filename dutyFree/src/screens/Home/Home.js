import React, {Component} from 'react'
import {StyleSheet, FlatList, View} from 'react-native';
import DbleCards from "../../components/DblCards/DblCards";
import SearchField from "../../components/SearchField/SearchField"

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: {
        paddingTop: 20
    }
})

class Home extends Component {


    onItemClicked = () => {
      this.props.navigator.push({
        screen: 'dutyFree.ItemDetailsScreen',
        title: 'Pushed Screen'
      });
    }
    render() {
        return (
            <View>
                <SearchField placeholder={"Start Searching"} placeHolderFont="placeHolderFont"/>
                <FlatList
                style={styles.list}
                    data={[
                        {
                            key: 'a',
                            title: 'Item 1',
                            desc: 'desc 1'
                        }, {
                            key: 'b',
                            title: 'title 2',
                            desc: 'desc 2'
                        }, {
                            key: 'c',
                            title: 'title 3',
                            desc: 'desc 3'
                        }, {
                            key: 'c',
                            title: 'title 3',
                            desc: 'desc 3'
                        }, {
                            key: 'c',
                            title: 'title 3',
                            desc: 'desc 3'
                        }
                    ]}
                    renderItem={({item}) => <DbleCards title={item.title} desc={item.desc} onPress={this.onItemClicked}/>
                    }
                />
            </View>
        )
    }
}

export default Home
