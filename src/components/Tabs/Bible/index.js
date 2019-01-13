import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

class Bible extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Bible</Text>
      </View>
    );
  }
}
export default Bible;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});