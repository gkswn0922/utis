import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { ProductListPage } from './pages/ProductList'
import { ProductDetailPage } from './pages/ProductDetail'
import { SearchResultsPage } from './pages/SearchResults'
import { ReviewsPage } from './pages/ReviewsPage'
import './App.css'

function App() {
  console.log('App component loaded')
  return (
    <Routes>
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/search" element={<SearchResultsPage />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<div>404 - Page not found</div>} />
      <Route path="/osaka" element={<OsakaSearchResults />} />
      <Route path="/osaka/product/:id" element={<OsakaProductDetail />} />
    </Routes>
  )
}

export default App