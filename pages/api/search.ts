// pages/api/search.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../lib/supabaseClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const q = Array.isArray(req.query.q) ? req.query.q[0] : req.query.q
  console.log('🔍 Received q =', q)

  if (!q) return res.status(400).json({ error: 'q 参数必填' })

  const { data, error } = await supabase.rpc('search_products', { q })
  console.log('💾 supabase.rpc result — data:', data, ' error:', error)

  if (error) return res.status(500).json({ error: error.message })
  res.status(200).json(data)
}
