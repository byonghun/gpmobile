import React, { PureComponent } from "react";
import { 
  View,
  Text,
  TouchableOpacity
} from "react-native";
import styles from './styles';
import {Navigation} from 'react-native-navigation';

export default class Sermon extends PureComponent {
  render() {
    const {item: {id, title, file, description}} = this.props
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={[
          styles.container,
          {
            height: 250,
            borderBottomColor: 'pink',
            borderBottomWidth: 1
          }
        ]}>
          <Text>{id}</Text>
          <Text>{title}</Text>
          <Text>{file}</Text>
          <Text>{description}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  onPress = () => 
    Navigation.push("CenterStack", {
      component: {
        name: "gp.sermonAudio",
        passProps: this.props.item
      }
    })
}