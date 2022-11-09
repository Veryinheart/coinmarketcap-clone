import { GlobalData } from './types'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GlobalData>
) {
  const getData = async () => {
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=${process.env.CMC_API_KEY}`,
      {
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      }
    )
    const data = await response.json()
    res.status(200).json(data)
  }
  getData()
}

export const config = {
  api: {
    externalResolver: true,
  },
}
