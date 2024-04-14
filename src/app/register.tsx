import { View, Image, Text, StatusBar } from "react-native"
import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { colors } from "@/styles/colors"
import { Link } from "expo-router"
import CheckBox from "expo-checkbox"
import { useState } from "react"

export default function Register() {
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
          <Text className="text-xl text-black-3 font-bold">Crie sua conta</Text>

          <View className="gap-3">
            <Input>
              <Input.Field placeholder="Nome" keyboardType="default" />
            </Input>

            <Input>
              <Input.Field placeholder="E-mail" keyboardType="email-address" />
            </Input>

            <Input>
              <Input.Field placeholder="CNPJ" keyboardType="number-pad" />
            </Input>

            <Input>
              <Input.Field placeholder="Senha" keyboardType="visible-password" />
            </Input>
          </View>

          <Button title="Criar" />

          <Text>
            Já tem uma conta?{" "}
            <Link href="/" className="text-primary-6 font-bold">Acesse</Link>
          </Text>
        </View>
      </View>
    </View>
  )
}