import type { NextPage } from 'next'
import Header from '../components/Header'
import GlobalStatus from '../components/GlobalStatus/index'
import Trending from '../components/Trending'
import { Paper } from '@mantine/core'
import Demo from '../components/Demo/index'

const Home: NextPage = () => {
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
        <div style={{ marginTop: '2.5rem' }}>
          <Paper p="xs">
            <Trending />
          </Paper>
        </div>

        <div style={{ marginTop: '5rem' }} />
        {/*<CMCTable/>*/}
        <Demo />
      </div>
    </div>
  )
}

export default Home
