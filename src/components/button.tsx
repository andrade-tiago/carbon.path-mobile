import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { colors } from "@/styles/colors"
import { twMerge } from "tailwind-merge"

interface ButtonProps extends TouchableOpacityProps {
  title: string
  isLoading?: boolean
  invertColors?: boolean
}

export function Button({
  title,
  isLoading = false,
  disabled = false,
  invertColors = false,
  ...props
}: ButtonProps) {
  const content = isLoading ? (
    <ActivityIndicator className="text-white-0" />
  ): (
    <Text className={twMerge(
      "text-base font-medium",
      invertColors ? 'text-primary-5' : 'text-white-0'
    )}>{title}</Text>
  )
  const buttonClasses = 'flex-1 items-center justify-center'

  return (
    <TouchableOpacity
      activeOpacity={.7}
      disabled={isLoading || disabled}
      className="w-full rounded-lg overflow-hidden h-16"
      {...props}
    >
      {invertColors ? (
        <View
          className={twMerge(buttonClasses, 'bg-white-0')}
          children={content}
        />
      ) : (
        <LinearGradient
          colors={ disabled
            ? [ colors.black[2], colors.black[2] ]
            : [ colors.primary[3], colors.secondary[4] ]
          }
          start={{ x: 0, y: .5 }}
          className={buttonClasses}
          children={content}
        />
      )}
    </TouchableOpacity>
  )
}
