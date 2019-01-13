import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

class Sermons extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Sermons</Text>
      </View>
    );
  }
}
export default Sermons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});