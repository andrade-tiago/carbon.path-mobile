import { View, Image, Text, StatusBar, Alert } from "react-native"
import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { Link, router } from "expo-router"
import { useState } from "react"
import { z } from "zod"
import { api } from "@/server/api"
import axios from "axios"
import { useCompanyLoginStore } from "@/store/company-login-store"

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cnpj, setCnpj] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const companyLoginStore = useCompanyLoginStore()

  const schema = z.object({
    name: z.string().min(2, "Nome muito curto!"),
    email: z.string().email("E-mail inválido!"),
    cnpj: z.string().regex(/^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}\-?\d{2}$/, "CNPJ inexistente!"),
    password: z.string()
      .min(8, "A senha deve ter no mínimo 8 caracteres.")
      .regex(
        /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).+$/,
        "A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais."
      ),
  })

  async function handlerRegister() {
    try {
      schema.parse({
        name,
        email,
        cnpj,
        password,
      })

      setIsLoading(true)

      // const registerResponse = await api.post("/", {name, email, cnpj, password})

      // if (registerResponse)

      // const loginResponse = await api.post("/", { email, password }) 

      // if (loginResponse)

      // companyLoginStore.save(data)

      router.push("/")
    } catch (error) {
      setIsLoading(false)

      if (error instanceof z.ZodError) {
        Alert.alert("Oops!", error.issues[0].message)
      }
      else if (axios.isAxiosError(error)) {
        Alert.alert("Cadastro", "Não foi possível realizar o caadastro!")
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
          <Text className="text-xl text-black-3 font-bold">Crie sua conta</Text>

          <View className="gap-3">
            <Input.Root>
              <Input.Field
                placeholder="Nome"
                keyboardType="default"
                onChangeText={setName}
              />
            </Input.Root>

            <Input.Root>
              <Input.Field
                placeholder="E-mail"
                keyboardType="email-address"
                onChangeText={setEmail}
              />
            </Input.Root>

            <Input.Root>
              <Input.Field
                placeholder="CNPJ"
                keyboardType="number-pad"
                onChangeText={setCnpj}
              />
            </Input.Root>

            <Input.Root>
              <Input.Field
                placeholder="Senha"
                keyboardType="visible-password"
                onChangeText={setPassword}
              />
            </Input.Root>
          </View>

          <Button
            title="Criar"
            onPress={handlerRegister}
            disabled={!(name.trim() && email.trim() && cnpj.trim() && password.trim())}
          />

          <Text>
            Já tem uma conta?{" "}
            <Link href="/" className="text-primary-6 font-bold">Acesse</Link>
          </Text>
        </View>
      </View>
    </View>
  )
}
