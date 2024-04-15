import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

export type CompanyLogin = {
  id: string
  nome: string
}

type StateProps = {
  data: CompanyLogin | null
  save: (data: CompanyLogin) => void
  remove: () => void
}

export const useCompanyLoginStore = create(
  persist<StateProps>((set) => ({
    data: null,

    save: (data: CompanyLogin) => set(() => ({ data })),
    remove: () => set(() => ({ data: null })),
  }), {
    name: "carbon-path:company-login",
    storage: createJSONStorage(() => AsyncStorage)
  })
)
