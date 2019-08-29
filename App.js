import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [goalState, setEnteredGoal] = useState('');
  const [courseGoalState, setCourseGoals] = useState([]);

  const setEnteredGoalHandler = (goal)=>{
    setEnteredGoal(goal);
  };
  const addGoalHandler = ()=>{
    setCourseGoals([...courseGoalState, goalState]);
  };
  return (
    <View style={styles.mainScreen}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInputEle}
          placeholder='Course Goal'
          onChangeText={setEnteredGoalHandler}
          value={goalState}
           />
          <Button 
            title='Add me'
            onPress={addGoalHandler}
          />
      </View>
      <View>
        {courseGoalState.map((goal)=> {
          return <Text>{goal}</Text>
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    mainScreen: {
      padding: 50,
    },
    inputContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',

    },
    TextInputEle:{
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      
    }
});
