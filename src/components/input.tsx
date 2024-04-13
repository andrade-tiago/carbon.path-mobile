import { ReactNode } from "react"
import { TextInput, View, TextInputProps } from "react-native"

import { colors } from "@/styles/colors"

function Input({ children }: { children: ReactNode }) {
  return (
    <View className="w-full h-14 flex-row items-center gap-3 border p-3 rounded-lg">
      {children}
    </View>
  )
}

function Field({ ...props }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 text-neutrals-9 font-regular"
      placeholderTextColor={colors.neutrals[3]}
      { ...props }
    />
  )
}

Input.Field = Field

export { Input }
