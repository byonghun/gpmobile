import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";
import {width} from '../../../helpers/dimensions';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * .85
  }
});