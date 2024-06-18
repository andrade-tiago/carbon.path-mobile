import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { colors } from "@/styles/colors"

interface ButtonProps extends TouchableOpacityProps {
  title: string
  isLoading?: boolean 
}

export function Button({ title, isLoading = false, disabled = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={.7}
      disabled={isLoading || disabled}
      className="w-full rounded-lg overflow-hidden h-16"
      {...rest}
    >
      <LinearGradient
        colors={ disabled
          ? [ colors.black[2], colors.black[2] ]
          : [ colors.primary[3], colors.secondary[4] ]
        }
        start={{ x: 0, y: .5 }}
        className="flex-1 items-center justify-center"
      >
        {isLoading ? (
          <ActivityIndicator className="text-white-0" />
        ): (
          <Text className="text-white-0 text-base font-medium">{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  )
}
