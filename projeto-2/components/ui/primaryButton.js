import { View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={style.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [style.buttonInnerContainer, style.pressed]
            : style.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: colors.primary600 }}
      >
        <Text style={style.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const style = StyleSheet.create({
  buttonOuterContainer: { borderRadius: 28, margin: 5, overflow: "hidden" },
  buttonInnerContainer: {
    backgroundColor: colors.primary500,

    paddingVertical: 8,
    paddingHorizontal: 16,

    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: { opacity: 0.75 },
});
