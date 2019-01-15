import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

class SermonAudio extends Component {
  render() {
    const {id, title, file, description} = this.props

    return (
      <View style={styles.container}>
        <Text>{id}</Text>
        <Text>{title}</Text>
        <Text>{file}</Text>
        <Text>{description}</Text>
      </View>
    );
  }
}

export default SermonAudio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});