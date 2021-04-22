import React, { useState } from 'react';
import { View, Text,Alert ,TouchableOpacity,StyleSheet, ImageBackground} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label ,Button} from 'native-base';
import firebase from '../firebase/fire';
const LoginScreen=({navigation})=> {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');

 const signIn=async()=>{
   try{
   firebase.auth().signInWithEmailAndPassword(email,password);
   navigation.navigate('HomeScreen')
 }catch(err)
 {
   setError(err.message);
 }
}
const image = { uri: "/Users/unthinkable-mac-0049/Desktop/Unthinkable/ReactNative/BirthdayApp/111482-light-color-blurred-background-vector.jpeg" };

 

  return (
   
      <Container style={styles.container}>
         <ImageBackground source={image} style={styles.image}>
      <Header />
      <Content style={styles.containerrform}>
      <Text style={{fontSize:50,fontWeight:'bold',marginLeft:90,marginBottom:20}}>Login</Text>
        <Form>
          <Item floatingLabel>
            <Label><Text style={{color:'black',fontSize:20,fontWeight:'600'} }>Email</Text></Label>
            <Input autoCorrect="off" onChangeText={setEmail} />
          </Item>
          <Item floatingLabel last>
            <Label><Text style={{color:'black',fontSize:20,fontWeight:'600'} }>Password</Text></Label>
            <Input secureTextEntry onChangeText={setPassword}/>
          </Item>
        </Form>
        {
            error?<Text style={{color:'red'}}>{error}</Text>:null
        }
        <Button primary style={{marginLeft:100,marginTop:20,width:200}}  onPress={()=>signIn()} ><Text style={{color:'white',marginLeft:70}}> Login </Text></Button>

 <TouchableOpacity onPress={()=>navigation.navigate('Signup')}><Text style={styles.text}>Already have an account Signup Now</Text></TouchableOpacity> 
      </Content>
      </ImageBackground>
    </Container>
  )}
export default LoginScreen;
const styles=StyleSheet.create({
 
  containerrform:{
    flex:0.4,
    
    flexDirection:'row',
    marginLeft:20,
    marginRight:20,
  alignSelf:'center',
    marginTop:200,
  },
  text:{
    fontSize:20,
    marginTop:40
  },
    image: {
    flex: 1,
    
  
  },

})