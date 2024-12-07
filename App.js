import { StyleSheet, Text, View, Button, TextInput, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import colors from './constants/colors';
export default function App() {

	const [pickedNumber, setPickedNumber] = useState();

	function pickedNumberHandler(inputNumber)
	{	
		setPickedNumber(inputNumber);
	}


	let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>;
	if(pickedNumber) screen = <GameScreen userNumber={pickedNumber}/>

	return (
		<LinearGradient colors={[colors.primary700, colors.accent500]}style={styles.rootScreen}>
			<ImageBackground source={require('./assets/images/background.png')}
							 resizeMode="cover"
							 style={styles.rootScreen}
							 imageStyle={styles.backgroundImage}>
				<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen:{
		flex:1
	},

	backgroundImage:{
		opacity:0.15
	}
}); 