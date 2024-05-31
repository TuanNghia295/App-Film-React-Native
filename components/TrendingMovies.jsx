import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View className="flex-row justify-center items-center">
        <Image
          source={require("../assets/imgs/nike3.png")}
          style={{
            width: width * 0.6,
            height: height * 0.4,
          }}
          className="rounded-3xl"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default function TrendingMovies({ data }) {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate("Movie", item);
  };
  return (
    <View className="mb-3">
      <Text className="text-white text-xl mx-4 mb-5 ">Trending</Text>
      <Swiper
        loop
        height={height * 0.5}
        horizontal={true}
        index={0}
        autoplay={true}
        autoplayTimeout={3}
        activeDotColor={"#FF6347"}
      >
        {data.map((item, index) => (
          <MovieCard handleClick={handleClick} key={index} item={item} />
        ))}
      </Swiper>
    </View>
  );
}
