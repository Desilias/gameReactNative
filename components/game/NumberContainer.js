import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numbertext}>{props.children}</Text>
    </View>
  );
};
export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary600,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  numbertext: {
    color: Colors.primary600,
    fontSize: 32,
    fontFamily: "open-sans-bold"
  }
});
