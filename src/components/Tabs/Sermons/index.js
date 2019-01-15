import React, { Component } from "react";
import { FlatList } from "react-native";
import Sermon from './sermon';

const sermons = [
  {
    id: "first",
    title: "First Sermons",
    date: new Date(),
    file: "Link to first sermon",
    description: "Description for first sermon"
  },
  {
    id: "second",
    title: "First Sermons",
    title: "Second Sermons",
    date: new Date(),
    file: "Link to second sermon",
    description: "Description for second sermon"
  },
  {
    id: "third",
    title: "Third Sermons",
    date: new Date(),
    file: "Link to third sermon",
    description: "Description for third sermon"
  }
]

class Sermons extends Component {
  render() {
    return (
      <FlatList
        data={sermons}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }

  keyExtractor = (item, index) => item.id

  renderItem = ({item, index}) => (
    <Sermon key={index} item={item} />
  )
}

export default Sermons;