import { View, Image, Text, StatusBar, Alert } from "react-native"
import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { colors } from "@/styles/colors"
import { Link, router } from "expo-router"
import CheckBox from "expo-checkbox"
import { useState } from "react"
import { z } from "zod"
import { api } from "@/server/api"
import axios from "axios"
import { useCompanyLoginStore } from "@/store/company-login-store"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberPass, setRememberPass] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const companyLoginStore = useCompanyLoginStore()

  const schema = z.object({
    email: z.string().email("E-mail inválido!"),
    password: z.string(),
    rememberPass: z.boolean(),
  })

  async function handlerLogin() {
    try {
      schema.parse({
        email,
        password,
        rememberPass
      })

      setIsLoading(true)

      // const loginResponse = await api.get("/", { email, password })

      // if (loginResponse)

      // companyLoginStore.save(data)

      router.push("/")
    } catch (error) {
      setIsLoading(false)

      if (error instanceof z.ZodError) {
        Alert.alert("Oops!", error.issues[0].message)
      }
      else if (axios.isAxiosError(error)) {
        Alert.alert("Login", "Não foi possível realizar o login!")
      }
    }
  }

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
              <Input.Field
                placeholder="E-mail"
                keyboardType="email-address"
                onChangeText={setEmail}
              />
            </Input>

            <Input>
              <Input.Field
                placeholder="Senha"
                keyboardType="visible-password"
                onChangeText={setPassword}
              />
            </Input>
          </View>

          <View className="flex-row w-full justify-between">
            <Text>Esqueci minha senha</Text>

            <View className="flex-row gap-3">
              <CheckBox
                value={rememberPass}
                onValueChange={setRememberPass}
                color={rememberPass ? colors.primary[3] : undefined}
              />
              <Text>Lembre-me</Text>
            </View>
          </View>

          <Button
            title="Acessar"
            disabled={!email.trim() || !password.trim()}
            isLoading={isLoading}
            onPress={handlerLogin}
          />

          <Text>
            Ainda não tem uma conta?{" "}
            <Link href="/register" className="text-primary-6 font-bold">Cadastre-se</Link>
          </Text>
        </View>
      </View>
    </View>
  )
}
