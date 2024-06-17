import { colors } from "@/styles/colors";
import { ReactNode } from "react";
import { View } from "react-native";

interface InputRootProps {
  children: ReactNode
}

export default function InputRoot({ children }: InputRootProps) {
  return (
    <View style={{ width: '100%', backgroundColor: colors.white[0], borderRadius: 8 }}>
      { children }
    </View>
  )
}
