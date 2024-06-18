import { colors } from "@/styles/colors";
import { ReactNode } from "react";
import { View } from "react-native";

interface InputRootProps {
  children: ReactNode
}

export default function InputRoot({ children }: InputRootProps) {
  return (
    <View className="w-full rounded-lg bg-gray-100 p-4 shadow shadow-gray-600">
      { children }
    </View>
  )
}
