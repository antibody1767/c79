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

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surname: "",
      age: "",
      phoneNo: "",
      email: '',
      password: '',
      confirmPassword: "",
      isModalVisible: false,
    };
  }
  showModal = () => {
    return (
      <Modal
        visible={this.state.isModalVisible}
        animationType="fade"
        transparent={false}
      >
        <View>
          <ScrollView style={{ width: "100%" }}>
            <KeyboardAvoidingView>
              <TextInput
                placeholder="Name"
                style={styles.input}
                onChangeText={(text) => { this.setState({ name: text }) }}
                value={this.state.name}
              />
              <TextInput
                placeholder="Surname"
                style={styles.input}
                onChangeText={(text) => { this.setState({ surname: text }) }}
                value={this.state.surname}
              />
              <TextInput
                placeholder="Age"
                style={styles.input}
                keyboardType={'numeric'}
                onChangeText={(text) => { this.setState({ age: text }) }}
                value={this.state.age}
              />
              <TextInput
                placeholder="Phone No."
                style={styles.input}
                keyboardType={"number-pad"}
                onChangeText={(text) => { this.setState({ phoneNo: text }) }}
                value={this.state.phoneNo}
              />
              <TextInput
                onChangeText={(text) => {
                  this.setState({ email: text });
                }}
                style={styles.input}
                placeholder="Email"
                value={this.state.email} />
              <TextInput
                onChangeText={(text) => {
                  this.setState({ password: text });
                }}
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={this.state.password} />
              <TextInput
                onChangeText={(text) => {
                  this.setState({ confirmPassword: text });
                }}
                style={styles.input}
                placeholder=" Confirm Password"
                secureTextEntry={true}
                value={this.state.confirmPassword} />
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.signUp();
                }}>
                <Text>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.setState({ isModalVisible: false });
                }}>
                <Text>Cancel</Text>
              </TouchableOpacity>

            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    )
  }
  signUp = async () => {
    if (this.state.password === this.state.confirmPassword) {
      if (this.state.email && this.state.password) {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(response => {
            db.collection("users").add({
              name: this.state.name,
              surname: this.state.surname,
              age: this.state.age,
              phoneNo: this.state.phoneNo,
              email: this.state.email
            })
            this.setState({isModalVisible:false})
            return(Alert.alert("User added"))
          }).catch((error) => {
            return (Alert.alert(error.message))
          })
      }
    } else {
      return (Alert.alert("passwords don't match"))
    }
  }
  login = async () => {
    if (this.state.email && this.state.password) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password);
        if (response) {
          return (Alert.alert("succesfully logged in"))
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  render() {
    return (
      <View>
        <View>
          {this.showModal()}
        </View>
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
          onPress={() => {
            this.setState({ isModalVisible: true });
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
