import { StyleSheet, View, Dimensions } from "react-native";

import colors from "../../constants/colors";

function Card({ children }) {
  return <View style={style.Card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const style = StyleSheet.create({
  Card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    backgroundColor: colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
});
