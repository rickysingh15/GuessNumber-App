import { StyleSheet, Text, View, Button, TextInput, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import colors from './constants/colors';
export default function App() {

	const [pickedNumber, setPickedNumber] = useState();
	const [isGameOver, setIsGameOver] = useState(false);

	function pickedNumberHandler(inputNumber)
	{	
		setPickedNumber(inputNumber);
	}

	function reseting()
	{
		console.log("Reseting called")
		setPickedNumber();
		setIsGameOver(false);
	}

	function gameOverHandler()
	{	
		setIsGameOver(true);
	}


	let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>;

	if(isGameOver) screen = <GameOverScreen onGameOver={reseting}/>
	else if(pickedNumber) screen = <GameScreen userNumber={pickedNumber} onGameOver = {gameOverHandler}/>


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