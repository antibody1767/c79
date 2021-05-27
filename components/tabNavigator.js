import React from "react";
import {createBottomTabNavigator}from "react-navigation-tabs"
import Donate from "../screens/donate";
import Request from "../screens/request";
import {Icon} from "react-native-elemants";

export const TabNavigator = createBottomTabNavigator({
    Donate: {screen:Donate,
    navigationOptions:{
        tabBarIcon:<Icon name= "home" type="font-awesome"/>
    }},
    Request: {screen:Request,
        navigationOptions:{
            tabBarIcon:<Icon name= "home" type="font-awesome"/>},
}})