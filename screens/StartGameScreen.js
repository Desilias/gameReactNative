import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Cards from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = (props) => {
  const [enteredText, setEnterdText] = useState("");

  const onchangeHandler = (inputText) => {
    console.log(inputText);
    setEnterdText(inputText);
  };

  const resetInputHandler = () => {
    setEnterdText("");
  };

  const confirmHandler = () => {
    const choseNumber = parseInt(enteredText);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      console.log(enteredText);
      console.log(choseNumber);
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99 ",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    props.onPickNumber(choseNumber);
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Cards>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredText}
          onChangeText={onchangeHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Cards>
    </View>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center"
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary600,
    color: Colors.primary600,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center"
  },
  buttonsContainer: {
    flexDirection: "row"
  },
  buttonContainer: {
    flex: 1
  }
});
