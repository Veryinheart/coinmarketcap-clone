import React, { ReactNode } from 'react'
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

export default GLobalContextProvider
