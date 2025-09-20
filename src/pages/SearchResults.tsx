import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { SearchHeader } from '../components/SearchHeader'
import { ProductCard } from '../components/ProductCard'
import { products } from '../data/products'
import './search-results.css'

export function SearchResultsPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products)

  // URL에서 검색어 가져오기
  useEffect(() => {
    const query = searchParams.get('q') || ''
    setSearchQuery(query)
    
    if (query) {
      // 검색어로 상품 필터링
      const filtered = products.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.city.toLowerCase().includes(query.toLowerCase()) ||
        product.country.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredProducts(filtered)
    } else {
      setFilteredProducts(products)
    }
  }, [searchParams])

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <div className="search-results-page">
      <SearchHeader 
        initialQuery={searchQuery}
        placeholder="검색어를 입력하세요"
        onSearch={handleSearch}
      />
      
      <div className="search-content">
        <div className="search-info">
          <h1 className="search-title">
            {searchQuery ? `"${searchQuery}" 검색 결과` : '검색 결과'}
          </h1>
          <p className="search-count">
            {filteredProducts.length}개의 상품을 찾았습니다
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h2>검색 결과가 없습니다</h2>
            <p>다른 검색어로 다시 시도해보세요</p>
            <button 
              className="back-to-products-btn"
              onClick={() => navigate('/products')}
            >
              상품 목록 보기
            </button>
          </div>
        )}
      </div>
    </div>
  )
}