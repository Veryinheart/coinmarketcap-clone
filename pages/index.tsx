import type { NextPage } from 'next'
import { useMantineColorScheme } from '@mantine/core'
import Header from '../components/Header'
import GlobalStatus from '../components/GlobalStatus/index'
import Trending from '../components/Trending'
import { Paper } from '@mantine/core'
// import Demo from '../components/Demo/index'
import CMCTable from '../components/CMCTable'

const Home: NextPage = () => {
  const { colorScheme } = useMantineColorScheme()

  const trendingBackGroundColor =
    colorScheme === 'dark'
      ? 'linear-gradient(#222430, #18191e)'
      : 'linear-gradient(#f8fafd, #f9fafb)'

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
            backgroundImage: trendingBackGroundColor,
          }}
        >
          <Trending />
        </div>

        <div style={{ marginTop: '5rem' }} />
        <CMCTable />
        {/* <Demo /> */}
        {/* <div>
          <img src={'https://www.coingecko.com/coins/1/sparkline'} alt='hah' />
        </div> */}
      </div>
    </div>
  )
}

export default Home

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }
