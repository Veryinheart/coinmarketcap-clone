import React, { ReactNode, useContext } from 'react'
import { createContext } from 'react'

interface AppContextInterface {
  name: string
  author: string
}
const AppCtx = createContext<AppContextInterface | null>(null)

const sampleAppContext: AppContextInterface = {
  name: 'coinmarketcapclone',
  author: 'DJ',
}

type Props = {
  children: ReactNode
}

const GLobalContextProvider = ({ children }: Props) => {
  return <AppCtx.Provider value={sampleAppContext}>{children}</AppCtx.Provider>
}

export function useGlobalContext() {
  return useContext(AppCtx)
}
export default GLobalContextProvider
