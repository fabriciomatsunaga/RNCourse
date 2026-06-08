import { StyleSheet, FlatList, View } from "react-native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/mealsList/MealItem";
import { useLayoutEffect } from "react";
import MealsList from "../components/mealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const CategoryTitle = CATEGORIES.find(
      (category) => category.id == catId,
    ).title;

    navigation.setOptions({
      title: CategoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
