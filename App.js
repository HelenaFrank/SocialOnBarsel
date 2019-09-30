import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

// pure javascript modules available in npm
import { Card } from 'react-native-paper';

// import from local files
import Assets from './components/Assets';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Det virker
        </Text>
        <Card>
          <Assets/>
        </Card>
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
