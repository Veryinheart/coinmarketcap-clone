import { useEffect, useState } from 'react'
import { TrendingCardRowData } from '../components/Trending/TrendingCard/TrendingCardRow/index'

interface Item {
  item: Coin
}

interface Coin {
  id: string
  coin_id: number
  name: string
  symbol: string
  market_cap_rank: number
  thumb: string
  small: string
  large: string
  slug: string
  price_btc: number
  score: number
}

const useTrendingData = () => {
  const [data, setData] = useState<TrendingCardRowData[]>([])

  useEffect(() => {
    async function getTrendingData() {
      const apiUrl = 'https://api.coingecko.com/api/v3/search/trending'
      const response = await fetch(apiUrl)
      const data = await response.json()
      const coinData: TrendingCardRowData[] | undefined = []
      const urls = data.coins
        .slice(0, 6)
        .map(
          (coin: Item) =>
            `https://api.coingecko.com/api/v3/coins/${coin?.item?.id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
        )

      await Promise.all(urls.map((url: string) => fetch(url)))
        .then((resp) => Promise.all(resp.map((res) => res.json())))
        .then((result) => {
          result.forEach((item, index) => {
            coinData.push({
              number: index < 3 ? index + 1 : index - 2,
              name: item.name,
              symbol: item.symbol,
              icon: item.image?.small,
              isIncrement: item.market_data.price_change_percentage_24h > 0,
              rate: item?.market_data.price_change_percentage_24h.toFixed(2),
              price: item.market_data.current_price.usd,
            })
          })
          setData(coinData)
        })
    }
    getTrendingData()
  }, [])

  return { data }
}

export default useTrendingData
