import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  Modal,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import firebase from 'firebase';
import db from "../config"

export default class Donate extends React.Component {
render(){
    return(
        <View>
            <Text>Donate</Text>
        </View>
    )
}
}
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    button: {
      backgroundColor: 'magenta',
      padding: 20,
      marginTop: 50,
    },
    input: {
      borderWidth: 2,
      width: '60%',
      height: 50,
      marginTop: 50,
      marginRight: 10,
    },
    box: {
      flexDirection: 'row',
    },
  });