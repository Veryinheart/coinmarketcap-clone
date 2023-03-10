import type { NextPage } from 'next'
import { useMantineColorScheme } from '@mantine/core'
import Header from '../components/Header'
import GlobalStatus from '../components/GlobalStatus/index'
import Trending from '../components/Trending'
import { Paper, Group } from '@mantine/core'
// import Demo from '../components/Demo/index'
import CMCTable from '../components/CMCTable'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  const { colorScheme } = useMantineColorScheme()

  const trendingBackGroundColor =
    colorScheme === 'dark'
      ? 'linear-gradient(#222430, #18191e)'
      : 'linear-gradient(#f8fafd, #f9fafb)'

  return (
    <div style={{ minHeight: '100vh', maxWidth: '100vw' }}>
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
            backgroundImage: trendingBackGroundColor,
          }}
        >
          <Trending />
        </div>

        <div style={{ marginTop: '5rem' }} />
        <CMCTable />
        <Banner />
        <Group grow position="center">
          <Footer />
        </Group>

      </div>
    </div>
  )
}

export default Home

