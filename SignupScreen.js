import React, { useState } from 'react';
import { View, Text,Alert ,TouchableOpacity,StyleSheet, ImageBackground} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label ,Button} from 'native-base';
import firebase from '../firebase/fire';
const SignupScreen=({navigation})=> {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

   const signUp=async()=>{
     try{
     firebase.auth().createUserWithEmailAndPassword(email,password);
     navigation.navigate('Login')
   }catch(err)
   {
     setError(err.message);
   }
  }
  const image = { uri: "/Users/unthinkable-mac-0049/Desktop/Unthinkable/ReactNative/BirthdayApp/111482-light-color-blurred-background-vector.jpeg" };

   

    return (
        
        <Container>
           <ImageBackground source={image} style={styles.image}>
        <Header />
        <Content style={styles.containerrform}>
          <Text style={{fontSize:50,fontWeight:'bold',marginLeft:80,marginBottom:20}}>Signup</Text>
          <Form>
            <Item floatingLabel>
              <Label ><Text style={{color:'black',fontSize:20,fontWeight:'600'} }>Email</Text></Label>
              <Input autoCorrect="off" onChangeText={setEmail} />
            </Item>
            <Item floatingLabel last>
              <Label> <Text style={{color:'black',fontSize:20,fontWeight:'600'} }>Password</Text></Label>
              <Input secureTextEntry onChangeText={setPassword}/>
            </Item>
          </Form>
          {
              error?<Text style={{color:'red'}}>{error}</Text>:null
          }
          <Button primary style={{marginLeft:60,marginTop:20,width:200}}  onPress={()=>signUp()} ><Text style={{color:'white',marginLeft:70}}> Signup </Text></Button>
       
 <TouchableOpacity onPress={()=>navigation.navigate('Login')}><Text style={styles.text}>Already have an account Login Now</Text></TouchableOpacity>      
        </Content>
        </ImageBackground>
      </Container>
    );
  }
export default SignupScreen;

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