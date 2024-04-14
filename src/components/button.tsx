import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { colors } from "@/styles/colors"

type Props = TouchableOpacityProps & {
  title: string
  isLoading?: boolean 
}

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={.7}
      disabled={isLoading}
      className="w-full rounded-lg overflow-hidden h-16"
      {...rest}
    >
      <LinearGradient
        colors={[ colors.primary[3], colors.secondary[4] ]}
        start={{ x: 0, y: .5 }}
        className="flex-1 items-center justify-center"
      >
        {isLoading ? (
          <ActivityIndicator className="text-white-0" />
        ): (
          <Text className="text-white-0 text-base">{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  )
}
