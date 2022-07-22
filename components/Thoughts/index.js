import React from "react";
import { View, Text } from "react-native";
import tw from 'tailwind-react-native-classnames';

const Index = () => {
  return (
    <View style={tw`m-2`}>
      <View
        style={{
          backgroundColor: "#ffffff",
          borderColor: "#eeeeee",
          borderRadius: 8,
          borderWidth: 1,
          padding: 20
        }}
      >
        <Text style={tw`text-blue-400 text-xl font-bold`}>Title</Text>
        <Text style={tw`text-xs font-bold`}>Date</Text>
        <Text style={tw`text-sm mt-2`}>Description</Text>
      </View>
    </View>
  );
};

export default Index;
