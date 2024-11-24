import { TextInput, View, StyleSheet } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen()
{
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput}
                       maxLength={2}
                       keyboardType='number-pad'/>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer:{
        // flex:1,
        marginTop:100,
        padding:16,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        marginHorizontal: 24,
        elevation: 20,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2}, 
        shadowRadius: 6,
        shadowOpacity: 0.25,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    numberInput:{
        height: 60,
        width: 50,
        fontSize: 32,
        borderBottomWidth: 2,
        borderBottomColor: '#ddb52f',
        color: '#ddb52f',
        fontWeight: 'bold',
        marginVertical: 8,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 8
    },

    buttonContainer:{
        flex:1
    }
});