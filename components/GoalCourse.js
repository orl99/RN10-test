import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoalCourse = props =>{
    return(
        <View style={styles.listIteam}>
            <Text>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listIteam:{
        backgroundColor: "#c4c0c0",
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 10,
        borderColor: 'black'
      }
})

export default GoalCourse;