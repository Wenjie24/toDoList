import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Button, KeyboardAvoidingView, Platform, Alert, Keyboard } from 'react-native';
import React, {useState} from 'react'
import Task from './components/TDL';

export default function App() {

  const [tempTask, setTempTask] = useState('');
  const [taskItem, setTaskItem] = useState([]);
  

  const addTaskHandler = () => {
    if (tempTask.trim() != '') {
      Keyboard.dismiss();
      setTaskItem([...taskItem, tempTask.trim()]);
      setTempTask('');
    } else {
      Alert.alert('Error in creating Task','Please input something!')
    }
      
  }

  const removeTaskHandler = (index) => {
    let itemsCopy = [...taskItem];
    itemsCopy.splice(index, 1);
    setTaskItem(itemsCopy);
  }

  

  return (
    <SafeAreaView style={styles.container}>


    <View style={styles.tdlContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20}}> 
      <Text style={styles.tdlTitle}>To Do List {taskItem.length == 0 ? '' : '('+taskItem.length+')' }</Text>
      <Button style={styles.clear} title='Clear' onPress={() => setTaskItem([])}/>
      </View>
    
      <ScrollView>
        <View  style={styles.itemContainer}>
        
          {
            taskItem.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => removeTaskHandler(index)}><Task text={item}/></TouchableOpacity>
            )})
          }
        </View>
      </ScrollView>
      
    </View>

    {/* Adding function */}
    <KeyboardAvoidingView 
      style={styles.inputWrapper} 
      behavior={Platform.OS === "ios" ? 'padding': 'height'}
      >

      <TextInput style={styles.input} placeholder='Add a item' value={tempTask} onChangeText={(text) => {setTempTask(text)}}></TextInput>
      {tempTask.trim() != '' ? <TouchableOpacity style={styles.submit} onPress={addTaskHandler}><Text style={styles.submitText}>+</Text></TouchableOpacity>: <TouchableOpacity style={[styles.submit]} onPress={addTaskHandler}><Text style={styles.submitText}>!</Text></TouchableOpacity>}
      

    </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#FDE5EC'
  },
  itemContainer : {
    flexDirection: 'column'
  },
  tdlContainer : {
    marginTop: 30,
    marginHorizontal: 20,

  },
  tdlTitle : {
    color: 'black',
    fontSize: 30,
  },
  inputWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40,
    width: "100%",
    justifyContent: 'space-between',
    alignItems: 'center'
  }, 
  input : {
    backgroundColor: '#FDE5EC',
    padding: 20,
    width: 250,
    borderRadius: 60,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#916DB3'
    

  },
  submit : {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#916DB3',
    marginRight: 20
  },
  submitText : {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
});
