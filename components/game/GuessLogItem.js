import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
const GuessLogItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{props.roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess : {props.guess}</Text>
    </View>
  );
};
export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary500,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary600,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4
  },
  itemText: {
    fontFamily: "open-sans"
  }
});
