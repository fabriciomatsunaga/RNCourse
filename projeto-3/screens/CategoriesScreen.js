import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTiles from "../components/CategoryGridTiles";

function CategoriesScreen({ navigation }) {
  function RenderCategoryItem(itemData) {
    function onPressHandler() {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    }

    return (
      <CategoryGridTiles
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      key={(item) => item.id}
      renderItem={RenderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
