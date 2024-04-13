import { View } from "react-native"
import { Input } from "@/components/input"
import { Button } from "@/components/button"

export default function Home() {
  return (
    <View className="flex-1 bg-white-0 justify-center items-center p-8">
      <View className="w-full gap-3">
        <Input>
          <Input.Field placeholder="E-mail" keyboardType="email-address" />
        </Input>

        <Button title="Acessar" />
      </View>
    </View>
  )
}