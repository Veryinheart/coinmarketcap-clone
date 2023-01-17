import Axios from 'axios'

export const API_URL = 'https://api.coingecko.com/api/v3'
/*
 coingecko api 
*/
const instance = Axios.create({
  baseURL: API_URL,
  timeout: 10 * 1000,
})

export default instance
