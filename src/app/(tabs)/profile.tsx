import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useState } from "react";
import { View } from "react-native";

export default function ProfileScreen() {
  const [isUpdating, setIsUpdating] = useState<boolean>(false)

  return (
    <View className="flex-1 items-center gap-5 px-8 justify-center">
      <View className="w-full gap-2">
        <Input.Root>
          <Input.Field placeholder="Nome" />
        </Input.Root>

        <Input.Root>
          <Input.Field placeholder="E-mail" />
        </Input.Root>

        <Input.Root>
          <Input.Field placeholder="CNPJ" />
        </Input.Root>

        <Input.Root>
          <Input.Field placeholder="Senha antiga" />
        </Input.Root>

        <Input.Root>
          <Input.Field placeholder="Nova senha" />
        </Input.Root>
      </View>

      <Button title="Atualizar" isLoading={isUpdating} />
    </View>
  )
}
