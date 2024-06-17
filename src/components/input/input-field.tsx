import { TextInputProps } from "react-native";
import { TextInput } from "react-native";
import { twMerge } from 'tailwind-merge'

interface InputFieldProps extends TextInputProps {} 

export default function InputField({ className, ...props }: InputFieldProps) {
  return (
    <TextInput
      className={twMerge("w-full text-gray-500", className)}
      {...props}
    />
  )
}
