import useSWR from 'swr'
import axios from 'axios'

const useGlobalData = () => {
  const apiUrl = 'https://api.coingecko.com/api/v3/global'
  const fetcher = async (apiUrl: string) =>
    await axios.get(apiUrl).then((res) => res.data)
  const { data, error } = useSWR(apiUrl, fetcher)
  console.log(data?.data)
  return { data, error }
}

export default useGlobalData
