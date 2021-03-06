import React from 'react';
import { StyleSheet, Platform, Image, Text, View, FlatList } from 'react-native';
import firebase from 'firebase';
import axios from 'axios';
import Header from './Header';
import Home from './Home';
import User from './User';
import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';
export default class MainScreen extends React.Component {
  state = { currentUser: null, listUser: [], title: 'Nothing', listUser1: [], listUser2: [] }



  componentWillMount() {
    axios.get('https://randomuser.me/api/?inc=gender,nat,picture,name,phone&results=10')
      .then(response => this.setState({ listUser: response.data }));
    axios.get('https://randomuser.me/api/?inc=gender,nat,picture,name,phone&results=10')
      .then(response => this.setState({ listUser1: response.data }));

    axios.get('https://randomuser.me/api/?inc=gender,nat,picture,name,phone&results=10')
      .then(response => this.setState({ listUser2: response.data }));



    const { currentUserLogin } = firebase.auth()

    this.setState({
      currentUser: currentUserLogin
    })

  }


  _renderTitleIndicator() {
    return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
  }

  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} />;
  }

  _renderTabIndicator() {
    let tabs = [{
      text: 'Home',

    }, {
      text: 'Message',

    }, {
      text: 'Profile',

    }];


    return <PagerTabIndicator
       tabs={tabs} 
       changePageWithAnimation = {true}
    />;
  }

  _renderItem = ({ item }) => {
    return (
      <User
        image={item.picture.large}
        text={item.name.last}
      />

    );
  }
  render() {

    return (
      <View style={styles.viewimg}>
        <IndicatorViewPager
        style={{flex:1, paddingTop:20, backgroundColor:'white'}}
          indicator={this._renderTabIndicator()}
        >
        <View>
          <Home/>
          </View>
          <View>
          <FlatList
            horizontal={false}
            data={this.state.listUser1.results}
            renderItem={this._renderItem.bind(this)}
            keyExtractor={item => item.phone}
          />
          </View>
          <View>
          <FlatList
            horizontal={false}
            data={this.state.listUser2.results}
            renderItem={this._renderItem.bind(this)}
            keyExtractor={item => item.phone}
          />
          </View>
        </IndicatorViewPager>

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
