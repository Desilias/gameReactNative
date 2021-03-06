import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
const Title = (props) => {
  return <Text style={styles.title}>{props.children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    padding: 12,
    borderColor: "white"
  }
});
