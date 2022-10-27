import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Paper,
} from '@mantine/core'

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
            'BlinkMacSystemFont,segoe ui,Roboto,Helvetica,Arial,sans-serif',
        }}
      >
        <Paper>
          <Component {...pageProps} />
        </Paper>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default MyApp
