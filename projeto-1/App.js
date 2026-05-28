import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [GoalList, setGoalList] = useState([]);

  function showInputHandler() {
    setIsModalVisible(true);
  }

  function hideInputHandler() {
    setIsModalVisible(false);
  }

  function addGoalHandler(goalText) {
    setGoalList((currentGoals) => [
      ...currentGoals,
      { text: goalText, id: Math.random().toString() },
    ]);
    hideInputHandler();
  }

  function removeGoalHandler(id) {
    // console.log('Remover')
    setGoalList((currentGoals) => {
      return currentGoals.filter((goal) => goal.id != id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.AppContainer}>
        <Button
          title="Adicionar Objetivo"
          color="#8232eb"
          onPress={showInputHandler}
        />
        <GoalInput
          isVisible={isModalVisible}
          onAddGoal={addGoalHandler}
          onCancel={hideInputHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={GoalList}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.id}
                  text={itemData.item.text}
                  onRemoveItem={removeGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    paddingTop: 65,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 8,
  },

  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
