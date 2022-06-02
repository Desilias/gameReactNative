import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = (props) => {
  const pressHandler = () => {
    props.onPress();
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "##80052a" }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
};
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden"
  },

  buttonInnerContainer: {
    backgroundColor: "#61052c",

    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 4
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
  pressed: {
    opacity: 0.25
  }
});
