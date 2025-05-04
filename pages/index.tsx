import { SearchBar } from '../components/SearchBar'

export default function Home() {
  return (
    <main className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold p-4">Price Tracker</h1>
      <SearchBar />
    </main>
  )
}
