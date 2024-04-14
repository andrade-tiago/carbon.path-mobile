import { View, Image, Text, StatusBar } from "react-native"
import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { colors } from "@/styles/colors"
import { Link } from "expo-router"
import CheckBox from "expo-checkbox"
import { useState } from "react"

export default function Home() {
  const [checked, setChecked] = useState(false)

  return (
    <View className="flex-1 bg-white-0 justify-center items-center p-8">
      <StatusBar barStyle="dark-content" />

      <View className="w-full gap-14">
        <View className="w-full items-center gap-3">
          <Image source={require("@/assets/title.png")} className="h-16" resizeMode="contain" />
          <Text className="text-black-3 font-medium">Unidos pela Mudança</Text>
        </View>

        <View className="gap-8 items-center">
          <Text className="text-xl text-black-3 font-bold">Acesse sua conta</Text>

          <View className="gap-3">
            <Input>
              <Input.Field placeholder="E-mail" keyboardType="email-address" />
            </Input>

            <Input>
              <Input.Field placeholder="Senha" keyboardType="visible-password" />
            </Input>
          </View>

          <View className="flex-row w-full justify-between">
            <Text>Esqueci minha senha</Text>

            <View className="flex-row gap-3">
              <CheckBox
                value={checked}
                onValueChange={setChecked}
                color={checked ? colors.primary[3] : undefined}
              />
              <Text>Lembre-me</Text>
            </View>
          </View>

          <Button title="Acessar" />

          <Text>
            Ainda não tem uma conta?{" "}
            <Link href="/register" className="text-primary-6 font-bold">Cadastre-se</Link>
          </Text>
        </View>
      </View>
    </View>
  )
}