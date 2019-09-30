import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

// import from local files
import Assets from './components/Assets';
import PresentationalComponent from './components/PresentationalComponent'

export default class App extends React.Component {
  state = {
    myState: "lortet virker ikke..."
  }
  updateState = () => {
    this.setState( {myState: "nu virker lortet!"} )
  }
  render() {
    return (
      <View style={styles.container}>
        <PresentationalComponent>
          myState = {this.state.myState}
          updateState = {this.updateState}
        </PresentationalComponent>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
