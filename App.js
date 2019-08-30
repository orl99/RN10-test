import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

//Components
import GoalCourse from './components/GoalCourse';
import GoalInput from './components/GoalInput';

export default function App() {
  //State for global 
  const [courseGoalState, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle)=>{
    setCourseGoals([...courseGoalState, {id: Math.random().toString(), value: goalTitle}]);
  };
  return (
    <View style={styles.mainScreen}>
      <GoalInput addGoalFunction={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoalState}
        renderItem={iteamData => <GoalCourse title={iteamData.item.value}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    mainScreen: {
      padding: 50,
    },

});
