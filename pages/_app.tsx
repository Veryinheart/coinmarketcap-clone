import '../styles/globals.css'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { useState } from 'react'
// import { CoinmarketProvider } from '../context/context.ts'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "segoe ui", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        {/* <CoinmarketProvider> */}
        <Component {...pageProps} />
        {/* </CoinmarketProvider> */}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default MyApp
