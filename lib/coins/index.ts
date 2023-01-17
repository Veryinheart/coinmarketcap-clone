import myAxios from '../apiConfig'

// const params1 = {
//     vs_currency: 'usd',
//     order: 'market_cap_desc',
//     per_page: '20',
//     page: '1',
//     sparkline: false,
// }

export const getCoinList = (path: string, params?: unknown) => {
  return myAxios
    .get(`${path}`, {
      params: params,
    })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error)
    })
}
