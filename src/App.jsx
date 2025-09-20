import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { ProductListPage } from './pages/ProductList'
import { ProductDetailPage } from './pages/ProductDetail'
import { SearchResultsPage } from './pages/SearchResults'
import './App.css'

function App() {
  console.log('App component loaded')
  return (
    <Routes>
      <Route path="/search" element={<SearchResultsPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<div>404 - Page not found</div>} />
    </Routes>
  )
}

export default App