import { ReactNode } from "react"
import { TextInput, View, TextInputProps } from "react-native"

import { colors } from "@/styles/colors"

function Input({ children }: { children: ReactNode }) {
  return (
    <View className="w-full flex-row h-16 bg-white-0 shadow-md shadow-neutral-800 items-center gap-3 p-3 rounded-lg">
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
