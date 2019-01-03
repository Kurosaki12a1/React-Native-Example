import React from 'react';
import { StyleSheet, Platform, Image, Text, View, FlatList } from 'react-native';
import firebase from 'firebase';
import axios from 'axios';
import CardSection from './CardSection';
import Card from './Card';
import Header from './Header';
import User from './User';

export default class MainScreen extends React.Component {
  state = { currentUser: null, listUser: [], title: 'Nothing' }



  componentWillMount() {
    axios.get('https://randomuser.me/api/?inc=gender,nat,picture,name&results=10')
      .then(response => this.setState({ listUser: response.data }));


    const { currentUserLogin } = firebase.auth()

    this.setState({
      currentUser: currentUserLogin
    })

  }

  componentDidMount() {

/*
    this.setState({
      title: "Hi" + this.state.currentUser + " && " + this.state.currentUser.email + "!"
    })
*/
  }

  _renderItem = ({ item }) => {
    console.log(item.name.last)
    return (
      <User
        image={item.picture.large}
     
      />
      
    );
  }

  render() {
    console.log(this.state.listUser.results);
    return (
      <Card>
        <Header headerText={"List Random User"} />
        <CardSection>
          <View>
            <FlatList
              style={{ flex: 1 }}
              horizontal={true}
              data={this.state.listUser.results}
              renderItem={this._renderItem.bind(this)}
              keyExtractor={item => item.name.last}
            />
          </View>
        </CardSection>
        
      </Card>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
