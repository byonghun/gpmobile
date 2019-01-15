import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import {width} from '../../../helpers/dimensions';

class Prayer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Prayer</Text>
      </View>
    );
  }
}
export default Prayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * .85
  }
});
