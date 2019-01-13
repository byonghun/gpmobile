import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

class Service extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Service</Text>
      </View>
    );
  }
}
export default Service;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});