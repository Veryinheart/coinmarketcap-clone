import type { NextPage } from 'next'
import Header from '../components/Header'
import GlobalStatus from '../components/GlobalStatus/index'
import Trending from '../components/Trending'
//import { Center, Stack } from '@mantine/core'

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
        <div
          style={{
            padding: '0.5rem 0',
            borderBottom: '1px solid rgb(160, 160, 160)',
          }}
        >
          <GlobalStatus />
        </div>
        <div
          style={{
            padding: '0.5rem 0',
            borderBottom: '1px solid rgb(160, 160, 160)',
          }}
        >
          <Header />
        </div>
        <div style={{ marginTop: '2.5rem' }}>
          <Trending />
        </div>

        <div style={{ marginTop: '5rem' }} />
        {/*<CMCTable/>*/}
      </div>
    </div>
  )
}

export default Home
