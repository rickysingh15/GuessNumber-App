import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

function NumberInput(props)
{


    function numberInputHandler(inputNum)
    {
        console.log("input is ", inputNum);
        let num = parseInt(inputNum, 10);
        console.log("num is ", num); 
        props.inputSetter(num);
    }

    return (
    <View style={styles.textInput}>
        <TextInput  onChangeText={numberInputHandler}
                    keyboardType='number-pad'
                    value={props.numVal}/>
    </View>
    );
}

export default NumberInput;

const styles = StyleSheet.create({
    textInput:{
        width: '70%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10
      }
});

