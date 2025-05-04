// pages/item/[id].tsx
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function ItemPage() {
  const { query } = useRouter()
  const id = Array.isArray(query.id) ? query.id[0] : query.id

  const { data, error } = useSWR(
    () => id ? `/api/item/${encodeURIComponent(id)}` : null,
    fetcher
  )

  if (!id) return <p>加载中…</p>
  if (error) return <p>加载出错: {error.message}</p>
  if (!data) return <p>加载中…</p>

  // data 是 [{ date: "...", price: number }, …]
  const labels = data.map((p: any) => p.date)
  const prices = data.map((p: any) => p.price)

  const chartData = {
    labels,
    datasets: [
      {
        label: '价格',
        data: prices,
        fill: false,
      }
    ]
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Price History</h1>
      <Line data={chartData} />
    </div>
  )
}
