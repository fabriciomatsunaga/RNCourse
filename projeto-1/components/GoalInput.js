import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [goalText, setGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(goalText);
    setGoalText("");
  }

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={Styles.inputContainer}>
        <Image
          style={Styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={Styles.textInput}
          placeholder="Seu Objetivo"
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={Styles.buttonContainer}>
          <View style={Styles.button}>
            <Button title="Cancelar" onPress={props.onCancel} />
          </View>
          <View style={Styles.button}>
            <Button title="Adicionar Objetivo" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const Styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    flex: 1,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 150,
    marginHorizontal: 5,
  },
});
