import { StyleSheet, Text, View, Button, TextInput, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import colors from './constants/colors';
export default function App() {

	const [pickedNumber, setPickedNumber] = useState();
	const [isGameOver, setIsGameOver] = useState(false);
	const [tries, setTries] = useState(0);

	const [fontsLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	})

	if(!fontsLoaded)
	{
		return <AppLoading/>; 
	}

	function pickedNumberHandler(inputNumber)
	{		
		setPickedNumber(inputNumber);
	}

	function reseting()
	{
		console.log("Reseting called")
		setPickedNumber();
		setIsGameOver(false);
		setTries(0);
	}

	function gameOverHandler()
	{	
		setIsGameOver(true);
	}

	function tryIncHandler()
    {
		console.log("tryIncHandler called");
        setTries(prevTries => prevTries+1);  
    }


	let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>;

	if(isGameOver) screen = <GameOverScreen onGameOver={reseting}
											numTries={tries}
											pickedNumber={pickedNumber}/>
	else if(pickedNumber) screen = <GameScreen userNumber={pickedNumber}
											   onGameOver = {gameOverHandler}
											   TriesHandler = {tryIncHandler} />


	return (
		<>
			<StatusBar style="light"/>
			<LinearGradient colors={[colors.primary700, colors.accent500]}style={styles.rootScreen}>
				<ImageBackground source={require('./assets/images/background.png')}
								resizeMode="cover"
								style={styles.rootScreen}
								imageStyle={styles.backgroundImage}>
					<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
				</ImageBackground>
			</LinearGradient>
		</>
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