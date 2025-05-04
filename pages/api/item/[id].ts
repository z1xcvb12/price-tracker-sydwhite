// pages/api/item/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../../lib/supabaseClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: 'id 参数错误' })
  }

  // 从物化视图里取每日最低价
  const { data, error } = await supabase
    .from('prices')
    .select('price_date, price')
    .eq('product_id', id)
    .order('price_date', { ascending: true })

  if (error) return res.status(500).json({ error: error.message })
  res.status(200).json(data)
}
