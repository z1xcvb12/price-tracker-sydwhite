// components/SearchBar.tsx
import { useState } from 'react'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function SearchBar() {
  const [term, setTerm] = useState('')
  const { data, error } = useSWR(
    term ? `/api/search?q=${encodeURIComponent(term)}` : null,
    fetcher
  )

  return (
    <div className="p-4">
      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="输入商品名…"
        value={term}
        onChange={e => setTerm(e.target.value)}
      />

      {/* 加载中 */}
      {!data && term && !error && (
        <p className="mt-2 text-gray-500">正在加载…</p>
      )}

      {/* 报错 */}
      {error && (
        <p className="mt-2 text-red-500">搜索出错：{error.message}</p>
      )}

      {/* 结果列表：去掉默认蓝色链接样式，删除 list-style 并移除下划线 */}
      {data && (
        <ul className="mt-2 space-y-2 list-none p-0">
          {data.map((item: any) => (
            <li key={item.id}>
              <Link
                href={`/item/${item.id}`}
                className="flex items-center space-x-4 p-2 border rounded hover:shadow no-underline text-current"
              >
                <img
                  src={item.thumb_url}
                  alt={item.name}
                  className="w-12 h-12 object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p>
                    现价 ￥{item.curr_price.toFixed(2)} ｜ 30天最低 ￥
                    {item.min30d.toFixed(2)}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* 无结果 */}
      {data && data.length === 0 && (
        <p className="mt-2 text-gray-500">未找到相关商品</p>
      )}
    </div>
  )
}