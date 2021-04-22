import { Button} from 'native-base'
import React from 'react'
import {useState} from 'react'
import { Text, View,TextInput, TouchableOpacity, StyleSheet ,KeyboardAvoidingView, Platform} from 'react-native'
import Task from './Components/Task';
   
function HomeScreen()  {
  const [task,setTask]=useState();
  const [taskItems,setTaskItems]=useState([]);
  const handleAddTask=()=>
  {
    setTaskItems([...taskItems,task])
    setTask(null);
  }
  return(
    <View style={styles.container}>
      <View style={styles.taskWrapper}>

        <Text style={styles.sectionTitle}>Todays Task</Text>
         <View style={styles.items}>
           {/* <Task text={'Ayush'}></Task>
           <Task text={'Prabhat'}></Task>
           <Task text={'Basu'}></Task>
           */}
           {
             taskItems.map((items,index)=>
             {
                return <Task key={index} text={items}></Task>
             })
           }
           
           
         </View>
<KeyboardAvoidingView behavior ={Platform.OS=="ios" ? "padding":"height"}
style={styles.writeTaskWrapper}>
  <TextInput style={styles.input} placeholder={'Write a Task!'} value={task} onChangeText={(text)=>setTask(text)}></TextInput>
  
  
  <TouchableOpacity onPress={()=>handleAddTask()}>
  <View style={styles.addWraper}>
    <Text style={styles.addText}>+</Text>
  </View>
</TouchableOpacity>
</KeyboardAvoidingView>

      </View>

      {/* Write a task */}







    </View>
  )




}
   
export default HomeScreen

const styles = StyleSheet.create ({
   container: {
     flex:1,
     backgroundColor:'#D8D8D8',
    
    
   },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,

  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper:{
    position:'relative',
    marginTop:450,
    bottom:60,
    width:'100%',
  flexDirection:'row',
  alignItems:'center',
    justifyContent:'space-between',
    
  },
  input:{
    paddingHorizontal:15,
    backgroundColor:'white',
    borderRadius:60,
    width:250,
    borderColor:'#C0C0C0',
    borderWidth:1,
    height:50,
  },
  addWraper:{
    width:60,
    height:60,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  }
})