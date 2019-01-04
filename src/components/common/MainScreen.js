import React from 'react';
import { StyleSheet, Platform, Image, Text, View, FlatList } from 'react-native';
import firebase from 'firebase';
import axios from 'axios';
import Header from './Header';
import User from './User';

export default class MainScreen extends React.Component {
  state = { currentUser: null, listUser: [], title: 'Nothing' }



  componentWillMount() {
    axios.get('https://randomuser.me/api/?inc=gender,nat,picture,name,phone&results=10')
      .then(response => this.setState({ listUser: response.data }));


    const { currentUserLogin } = firebase.auth()

    this.setState({
      currentUser: currentUserLogin
    })

  }




  _renderItem = ({ item }) => {
    return (
      <User
        image={item.picture.large}
        text={item.name.last}
      />

    );
  }
  //  <Header headerText={"List Random User"} />
  render() {

    return (
      <View style={styles.viewimg}>
        <Header headerText={"Test"}/>

        <FlatList
          horizontal={false}
          data={this.state.listUser.results}
          renderItem={this._renderItem.bind(this)}
          keyExtractor={item => item.phone}
        />
     
      </View>
    );
  }
}

// Hi {currentUser && currentUser.email}!
//   const { currentUser  } = this.state
/*
<View style={styles.container}>
          <Text>
            {this.state.title}
          </Text>
        </View>
*/
const styles = StyleSheet.create({
  fullbg: {
    flexDirection: 'column',
    alignItems: 'stretch',
    flex: 1,
    backgroundColor: 'green'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  listView: {

  },
  viewimg: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    flexDirection: 'column',
    alignItems: 'stretch',
    flex: 1
  },
})
