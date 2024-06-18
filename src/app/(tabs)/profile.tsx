import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Text, View } from "react-native";

export default function ProfileScreen() {
  const [isUpdatingProfile, setIsUpdatingProfile] = useState<boolean>(false)
  const [popupActive, setPopupActive] = useState<boolean>(false)
  const [password, setPassword] = useState<string>("")
  const [newPassword, setNewPassword] = useState<string>("")
  const user = {
    name: 'Jane Doe',
    email: 'janedoe@email.com',
    cnpj: '123.456.789/01',
    imgURL: 'https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_960_720.jpg',
  }

  const handleSubmit = () => {
    setPopupActive(true)
    setPassword("")
    setNewPassword("")
  }
  const handleConfirm = () => {
    setPopupActive(false)
    router.push('/')
  }

  return (
    <>
      <View className="flex-1 items-center bg-white-0 gap-8 px-8 justify-center">
        <View className="gap-3 items-center">
          <Image
            source={{ uri: user.imgURL }}
            className="size-32 rounded-full"
            resizeMode="cover"
          />
          <Text className="font-bold text-xl text-gray-500">
            Alterar foto
          </Text>
        </View>

        <View className="w-full gap-2">
          <Input.Root>
            <Input.Field
              placeholder="Nome" value={user.name} editable={false} />
          </Input.Root>

          <Input.Root>
            <Input.Field placeholder="E-mail" value={user.email} editable={false} />
          </Input.Root>

          <Input.Root>
            <Input.Field placeholder="CNPJ" value={user.cnpj} editable={false} />
          </Input.Root>

          <Input.Root>
            <Input.Field placeholder="Senha antiga" value={password} onChangeText={setPassword} />
          </Input.Root>

          <Input.Root>
            <Input.Field placeholder="Nova senha" value={newPassword} onChangeText={setNewPassword} />
          </Input.Root>
        </View>

        <Button
          title="Atualizar"
          isLoading={isUpdatingProfile}
          onPress={handleSubmit}
        />
      </View>

      {popupActive && (
        <View
          className="bg-black-3/70 size-full w-full
            justify-center items-center z-10 p-5 border absolute
            left-0 top-0"
        >
          <LinearGradient
            colors={[ colors.primary[3], colors.secondary[4] ]}
            start={{ x: 0, y: .5 }}
            className="w-20 h-20 -mb-10 items-center
              justify-center rounded-full border-4 border-white-0
              overflow-hidden z-20"
          >
            <Ionicons name="checkmark" size={28} color={colors.white[0]} />
          </LinearGradient>

          <LinearGradient
            colors={[ colors.primary[3], colors.secondary[4] ]}
            start={{ x: 0, y: .5 }}
            className="rounded-lg p-5 pt-16 gap-5 w-full items-center
              overflow-hidden shadow-lg shadow-black-3/80"
          >
            <Text className="text-white-0 font-regular">
              Senha alterada com sucesso!
            </Text>

            <Button
              title="Voltar ao menu"
              onPress={handleConfirm}
              invertColors
            />
          </LinearGradient>
        </View>
      )} 
    </>
  )
}
