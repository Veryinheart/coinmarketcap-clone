import useSWR from 'swr'
import axios from 'axios'

//   {
//     number: 1,
//     symbol: 'BTC',
//     name: 'Bitcoin',
//     icon: fire,
//     isIncrement: true,
//     rate: '2.34%',
//   }

const useTrendingData = () => {
  const apiUrl = 'https://api.coingecko.com/api/v3/search/trending'
  const fetcher = async (apiUrl: string) =>
    await axios.get(apiUrl).then((res) => res.data)
  const { data, error } = useSWR(apiUrl, fetcher)
  console.log(data?.coins.slice(0, 3))

  console.log(data?.coins.slice(3, 6))

  // const urls = [
  //     `https://api.coingecko.com/api/v3/coins/dinolfg?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
  //     `https://api.coingecko.com/api/v3/coins/my-neighbor-alice?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
  //   ];
  // Promise.all(urls.map((url) => fetch(url)))
  //   .then((resp) => Promise.all(resp.map((r) => r.json())))
  //   .then((result) => console.log(result));

  // function fetchTrending() {
  //     const promises = [];
  //     for (const coin of data?.coins.slice(0, 6)) {
  //         const response = fetch(`https://api.coingecko.com/api/v3/coins/${coin.id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
  //         promises.push(response);
  //     }
  //     return Promise.all(promises);
  // }

  // const awaitJson = (promises) => Promise.all(promises.map(response => {
  //     if (response.ok) return response.json();
  //     throw new Error(response.statusText);
  // }))

  // fetchTrending()
  //     .then(awaitJson)
  //     .then(data => { console.log(data) })

  return { data, error }
}

export default useTrendingData
