import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";
const Cards = (props) => {
  return <View style={styles.card}>{props.children}</View>;
};
export default Cards;

const styles = StyleSheet.create({
  card: {
    marginTop: 36,
    padding: 16,
    backgroundColor: Colors.primary500,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center"
  }
});
