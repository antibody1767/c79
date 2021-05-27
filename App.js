
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { TabNavigator } from "./components/tabNavigator"
import LoginScreen from "./screens/login"

export default class App extends React.Component {
  render() {
    return (<AppContainer />)
  }

}
const SwitchNaigator = createSwitchNavigator({
  LoginScreen: LoginScreen,
  TabNavigator:TabNavigator,
})
const AppContainer = createAppContainer(SwitchNaigator)