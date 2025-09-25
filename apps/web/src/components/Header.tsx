import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200 h-20 px-10 font-bold text-lg">
      <h1>Allen Recipes</h1>
      <SearchBar />
      <nav>
        <ul className="flex gap-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}