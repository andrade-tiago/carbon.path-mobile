import { View, Image, Text, StatusBar, Alert } from "react-native"
import { Input } from "@/components/input"
import { Button } from "@/components/button"
import { Link } from "expo-router"
import { useState } from "react"
import { z } from "zod"

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cnpj, setCnpj] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const schema = z.object({
    name: z.string().min(2, "Nome muito curto!"),
    email: z.string().email("E-mail inválido!"),
    cnpj: z.string().regex(/^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}\-?\d{2}$/, "CNPJ inexistente!"),
    password: z.string()
      .min(8, "A senha deve ter no mínimo 8 caracteres.")
      .regex(
        /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).+$/,
        "A senha deve conter letras maiúsculas, minúsculas, números e carcteres especiais."
      ),
  })

  function handlerRegister() {
    setIsLoading(true)

    try {
      schema.parse({
        name,
        email,
        cnpj,
        password,
      })
    } catch (error) {
      if (error instanceof z.ZodError) {
        Alert.alert("Oops!", error.issues[0].message)
      } 
    } finally {
      setIsLoading(false)
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
            <Input>
              <Input.Field placeholder="Nome" keyboardType="default" onChangeText={setName} />
            </Input>

            <Input>
              <Input.Field placeholder="E-mail" keyboardType="email-address" onChangeText={setEmail} />
            </Input>

            <Input>
              <Input.Field placeholder="CNPJ" keyboardType="number-pad" onChangeText={setCnpj} />
            </Input>

            <Input>
              <Input.Field placeholder="Senha" keyboardType="visible-password" onChangeText={setPassword} />
            </Input>
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