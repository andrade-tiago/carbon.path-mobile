import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string
  isLoading?: boolean 
}

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={.7}
      disabled={isLoading}
      className="w-full h-14 bg-emerald-900 items-center justify-center rounded-lg"
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator className="text-white-0" />
      ): (
        <Text className="text-white-0 text-base">{title}</Text>
      )}
    </TouchableOpacity>
  )
}
