import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");
export default function MovieList({ title, data }) {
  const movieName = "Spider man";
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate("Movie", item);
  };
  return (
    <View className="mb-8">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>
        <TouchableOpacity>
          <Text style={styles.text}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Movie Scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => handleNavigate(item)}
          >
            <View className="space-y-1 mr-4">
              <Image
                source={require("../assets/imgs/nike5.png")}
                className="rounded-3xl"
                style={{ width: width * 0.33, height: height * 0.22 }}
              />
              <Text className="text-neutral-300 ml-1">{movieName}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}
