import React from "react";
import { View, Text, Image } from "react-native";
import tw from 'tailwind-react-native-classnames';
import Icon from "../../assets/delete.png";

const Index = () => {
  return (
    <View style={tw`m-2`}>
      <View
        style={{
          backgroundColor: "#ffffff",
          borderColor: "#eeeeee",
          borderRadius: 8,
          borderWidth: 1,
          padding: 20,
          display: "flex",
          flexDirection:"row",
          alignItems:"center"
        }}
      >
        <View style={{flexGrow:1}}>
        <Text style={tw`text-blue-400 text-xl font-bold`}>Title</Text>
        <Text style={tw`text-xs font-bold`}>Date</Text>
        <Text style={tw`text-sm mt-2`}>Description</Text>
        </View>
        <View style={{}}>
          <Image style={tw`w-6 h-6`} source={Icon}/>
        </View>
      </View>
    </View>
  );
};

export default Index;
