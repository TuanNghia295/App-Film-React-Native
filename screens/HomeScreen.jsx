import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icons from "react-native-heroicons/solid";
import { styles } from "../theme";
import TrendingMovies from "../components/TrendingMovies";
import MovieList from "../components/MovieList";
const ios = Platform.OS === "ios";
export default function HomeScreen() {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upComing,setUpComing] = useState([1,2,3])
  const [topRate,setTopRate] = useState([1,2,3])
  return (
    <View className="bg-neutral-800 flex-1">
      {/* Search bar and Logo */}
      <SafeAreaView className={ios ? "-mb-2" : "mb-3 mt-5"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Icons.Bars3CenterLeftIcon
            size={"30"}
            strokeWidth={2}
            color={"white"}
          />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <Icons.MagnifyingGlassIcon
              size={30}
              strokeWidth={2}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Treding movie carousel */}
        <TrendingMovies data={trending} />

        {/* Upcoming movies row */}
        <MovieList title="UpComing" data={upComing}/>
      </ScrollView>
    </View>
  );
}
