import type { NextPage } from 'next'
import Header from '../components/Header'
import GlobalStatus from '../components/GlobalStatus/index'

const Home: NextPage = () => {
  return (
    <div style={{ minHeight: '100vh', maxWidth: '1400px' }}>
      <div style={{ padding: '0.5rem 0' }}>
        <GlobalStatus />
      </div>
      <Header />
      <div style={{ marginTop: '2.5rem' }} />
      {/*<Trending/>*/}
      <div style={{ marginTop: '5rem' }} />
      {/*<CMCTable/>*/}
    </div>
  )
}

export default Home
