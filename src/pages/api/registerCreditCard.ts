// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: {
    cardNumber: string
    name: string
    expirationDate: string
    CVV: string
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const data = req.body

  res.status(200).json({ apiStatus: 'online', ...data })
}
