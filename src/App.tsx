import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { HomePage } from './pages/Home'
import { ProductListPage } from './pages/ProductList'
import { ProductDetailPage } from './pages/ProductDetail'
import { SearchResultsPage } from './pages/SearchResults'
import OsakaSearchResults from './pages/OsakaSearchResults'
import OsakaProductDetail from './pages/OsakaProductDetail'
import { ReviewsPage } from './pages/ReviewsPage'
import { ThemeProvider } from './contexts/ThemeContext'

function Layout() {
  return (
    <div className="app-root">
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/osaka" element={<OsakaSearchResults />} />
          <Route path="/osaka/product/:id" element={<OsakaProductDetail />} />
          <Route path="/reviews" element={<ReviewsPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
