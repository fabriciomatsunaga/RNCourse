import { Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={style.title}>{children}</Text>;
}

export default Title;

const style = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
  },
});
