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
import db from "../config";
import MyHeader from "../components/myHeader";

export default class Request extends React.Component {
    constructor(){
        super()
        this.state={
            bookName:"",
            author:"",
            reason:"",
            userId:firebase.auth().currentUser.email,
        }
    }
    addRequest= ()=>{
        db.collection("requestedBooks").add({
            userId:this.state.userId,
            bookName:this.state.bookName,
            author:this.state.author,
            reason:this.state.reason,
        })
    }
    render(){
        return(
            <View>
                <MyHeader/>
                <TextInput 
                placeholder ="Book name" 
                style={styles.input}
                value={this.state.bookName}
                onChangeText={(text)=>{
                    this.setState({bookName:text})
                }}
                />
                <TextInput 
                placeholder="Author"
                style={styles.input}
                value={this.state.author}
                onChangeText={(text)=>{this.setState({author:text})}}
                />
                <TextInput 
                placeholder="Reason"
                style={styles.input}
                value={this.state.reason}
                onChangeText={(text)=>{this.setState({reason:text})}}
                />
                <TouchableOpacity onPress={()=>{this.addRequest}}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            

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