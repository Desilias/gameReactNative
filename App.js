import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundNumber, setRoundNumber] = useState(0);
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const pickNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setRoundNumber(0);
  };

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;
  console.log(userNumber);
  const gameOverHandler = (round) => {
    setGameIsOver(true);
    setRoundNumber(round);
    console.log(round);
  };

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        roundNumber={roundNumber}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={["#72063c", "#ddb52f"]}
      style={styles.startGameContainer}
    >
      <ImageBackground
        source={require("./assets/images/backgroundImage.jpg")}
        resizeMode="cover"
        style={styles.startGameContainer}
        imageStyle={styles.imagestyle}
      >
        <SafeAreaView style={styles.startGameContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  startGameContainer: {
    flex: 1
  },
  imagestyle: {
    opacity: 0.25
  }
});
