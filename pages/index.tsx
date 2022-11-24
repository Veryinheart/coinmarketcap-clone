import type { NextPage } from 'next'
import Header from '../components/Header'
import GlobalStatus from '../components/GlobalStatus/index'
import Trending from '../components/Trending'
import { Paper } from '@mantine/core'
import Demo from '../components/Demo/index'
import { useMantineColorScheme } from '@mantine/core'
const Home: NextPage = () => {
  const { colorScheme } = useMantineColorScheme()

  const trendingBackGroundColor = colorScheme === 'dark' ? '#20232e' : '#f9fbfd'

  return (
    <div style={{ minHeight: '100vh', width: 'auto' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}
      >
        <Paper shadow="xs" withBorder>
          <div
            style={{
              padding: '0.5rem 0',
            }}
          >
            <GlobalStatus />
          </div>
        </Paper>
        <Paper shadow="xs">
          <div
            style={{
              padding: '0.5rem 0',
            }}
          >
            <Header />
          </div>
        </Paper>
        <div
          style={{
            padding: '1.5rem 0',
            backgroundColor: trendingBackGroundColor,
          }}
        >
          <Trending />
        </div>

        <div style={{ marginTop: '5rem' }} />
        {/*<CMCTable/>*/}
        <Demo />
      </div>
    </div>
  )
}

export default Home
