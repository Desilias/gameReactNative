import { View, Text, Image, StyleSheet } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = (props) => {
  const restartHandler = () => {
    props.onStartNewGame();
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!!!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone needed
        <Text style={styles.hightlight}>{props.roundNumber}</Text> rounds to
        guess the number
        <Text style={styles.hightlight}>{props.userNumber}</Text>
      </Text>
      <PrimaryButton onPress={restartHandler}>Start new Game</PrimaryButton>
    </View>
  );
};
export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary500,
    margin: 36,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center"
  },
  hightlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500
  }
});
