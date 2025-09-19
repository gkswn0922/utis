import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HomePage } from './pages/Home'
import { ProductListPage } from './pages/ProductList'
import { ProductDetailPage } from './pages/ProductDetail'

function Layout() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Route>
    </Routes>
  )
}
