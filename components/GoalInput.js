import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = props =>{
    //State for this component
    const [goalState, setEnteredGoal] = useState('');
    const setEnteredGoalHandler = (goal)=>{
        setEnteredGoal(goal);
    };
    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.TextInputEle}
              placeholder='Course Goal'
              onChangeText={setEnteredGoalHandler}
              value={goalState}
            />
            <Button 
                title='Add me'
                onPress={props.addGoalFunction.bind(this, goalState)}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    TextInputEle:{
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        
      },
      inputContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
  
      },
})

export default GoalInput;