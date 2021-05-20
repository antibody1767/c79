import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  signUp = async()=>{
      if(this.state.email&& this.state.password){
          firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
          .then(response=>{
            return(Alert.alert("user added"))
          }).catch((error)=>{
            return(Alert.alert(errot.message))
          })
      }
  }
  login = async () => {
    if (this.state.email && this.state.password) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password);
        if (response) {
            return(Alert.alert("succesfully logged in"))
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  render() {
    return (
      <View>
        <TextInput
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
          style={styles.input}
          placeholder="Email"
          value={this.state.email}></TextInput>
        <TextInput
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={this.state.password}></TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.login();
          }}>
          <Text>login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.button}
        onPress ={()=>{
            this.signUp();
        }}>
            <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
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
