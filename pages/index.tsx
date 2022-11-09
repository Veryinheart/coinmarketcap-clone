import type { NextPage } from 'next'
import Header from '../components/Header'
import GlobalStatus from '../components/GlobalStatus/index'
import Trending from '../components/Trending'
import { Paper } from '@mantine/core'

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
              padding: '0.5rem',
            }}
          >
            <GlobalStatus />
          </div>
        </Paper>
        <Paper shadow="xs">
          <div
            style={{
              padding: '0.5rem',
            }}
          >
            <Header />
          </div>
        </Paper>
        <div style={{ marginTop: '2.5rem' }}>
          <Paper p="md">
            <Trending />
          </Paper>
        </div>

        <div style={{ marginTop: '5rem' }} />
        {/*<CMCTable/>*/}
      </div>
    </div>
  )
}

export default Home
