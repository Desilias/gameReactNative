import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Cards from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Ionicons from "@expo/vector-icons/Ionicons";
import GuessLogItem from "../components/game/GuessLogItem";

const generatedRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generatedRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBundary = 1;
let maxBundary = 100;
const GameScreen = (props) => {
  const initialGess = generatedRandomBetween(1, 100, props.userNumber);
  const [currentGess, setCurrentGess] = useState(initialGess);
  const [guessRounds, setGuessRounds] = useState([initialGess]);

  useEffect(() => {
    if (currentGess === props.userNumber) {
      props.onGameOver(guessRounds.length);
    }
  }, [currentGess, props.userNumber, props.onGameOver]);

  useEffect(() => {
    minBundary = 1;
    maxBundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGess < props.userNumber) ||
      (direction === "greater" && currentGess > props.userNumber)
    ) {
      Alert.alert("Don't lie", "you now that this wong", [
        { text: "Sorry", style: "cancel" }
      ]);
      return;
    }
    if (direction === "lower") {
      maxBundary = currentGess;
    } else {
      minBundary = currentGess + 1;
    }
    const newRndNumber = generatedRandomBetween(
      minBundary,
      maxBundary,
      currentGess
    );
    setCurrentGess(newRndNumber);
    setGuessRounds([newRndNumber, ...guessRounds]);
  };

  const guessRoundsListLength = guessRounds.length;
  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGess}</NumberContainer>
      <Cards>
        <InstructionText style={styles.instructionText}>
          Higher or Lower ?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Cards>
      <View style={styles.flatlistContainer}>
        {/* {guessRounds.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))} */}
        <FlatList
          data={guessRounds}
          renderItem={(guessRound) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - guessRound.index}
              guess={guessRound.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50
  },
  instructionText: {
    marginTop: 12
  },
  buttonsContainer: {
    flexDirection: "row"
  },
  buttonContainer: {
    flex: 1
  },
  flatlistContainer: {
    flex: 1,
    padding: 16
  }
});
