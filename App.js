import tw from "tailwind-react-native-classnames";
import { StyleSheet, Text, View } from "react-native";
import Thought from "./components/Thoughts";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={tw`mt-4 mx-5`}>
        <Text style={tw`text-blue-500 text-2xl font-bold`}>Thoughts</Text>
        <View style={{ paddingVertical: 10 }}>
          <Thought />
          <Thought />
          <Thought />
          <Thought />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
