import useSWR from 'swr'
import axios from 'axios'

const useCoinList = () => {
  const apiUrl =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d'
  const fetcher = async (apiUrl: string) =>
    await axios.get(apiUrl).then((res) => {
      return res.data
    })
  const { data, error } = useSWR(apiUrl, fetcher)

  return { data, error }
}

export default useCoinList
