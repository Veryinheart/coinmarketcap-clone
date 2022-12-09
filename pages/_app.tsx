import '../styles/globals.css'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { useState } from 'react'
import GLobalContextProvider from '../context/index'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
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
          breakpoints: {
            xs: 500,
            sm: 800,
            md: 1000,
            lg: 1200,
            xl: 1400,
          },
        }}
      >
        <GLobalContextProvider>
          <Component {...pageProps} />
        </GLobalContextProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default MyApp
