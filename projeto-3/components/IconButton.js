import { Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} color={color} onPress={onPress} size={25} />
    </Pressable>
  );
}

export default IconButton;
