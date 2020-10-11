import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Header } from 'react-native-elements';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import db from '../config'
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      text: '',
      displayText: '',
    }
  }
  render(){
    return (
      <KeyboardAvoidingView
      behavior="padding" enabled>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <View>
          <Header
            backgroundColor={'21B9D2'}
            centerComponent={{ text: 'StoryHub', style: {color: '1DFFE8', fontSize:20}}}/>
          </View>
      <TextInput
      style={styles.inputBox}
      onChangeText={(text)=>{
        this.setState({text:text});
      }}
      value={this.state.text}/>
      <Text>{this.state.displayText}</Text>

      <TextInput
      style={{width:200,height:30,borderWidth:3}}
      placeholder="Title of the story"
      onChangeText={(text)=>{
          this.setState({
            titleOfTheStory:text
          })
      }}
      value={this.state.titleOfTheStory}>
      </TextInput>

      <TextInput
      style={styles.inputBox}
      placeholder="Title of the story"
      onChangeText={text =>this.setState({titleOfTheStory:text})}
      value={this.state.titleOfTheStory}/>

      <TextInput
      style={{width:200,height:30,borderWidth:3}}
      placeholder="Author of the story"
      onChangeText={(text)=>{
          this.setState({
            authorOfTheStory:text
          })
      }}
      value={this.state.authorOfTheStory}/>

      <TextInput
      style={styles.inputBox}
      placeholder="Author of the story"
      onChangeText={text =>this.setState({authorOfTheStory})}
      value={this.state.authorOfTheStory}/>

      <TextInput
      style={{width:200,height:30,borderWidth:3}}
      placeholder="Write story"
      multiline = {true}
      onChangeText={(text)=>{
          this.setState({
            writeStory:text
          })
      }}
      
      value={this.state.writeStory}>
      </TextInput>

      <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitStory}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

        </View>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '21B9D2',
  },
  inputBox: {
    marginTop: 200,
    width: '20',
    alignSelf: 'center',
    borderWidth: 4,
    outline: 'none',
  }
});