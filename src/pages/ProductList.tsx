import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { products } from '../data/products'
import './list.css'

export function ProductListPage() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('일본 숙소 특가')

  const recentSearches = [
    '일본 숙소 특가',
    '인기 지역 숙소 특가 진행 중',
    '도쿄 호텔 할인',
    '오사카 여행 패키지',
    '후쿠오카 특가 항공권'
  ]

  const popularSearches = [
    '일본 숙소 특가',
    '인기 지역 숙소 특가 진행 중',
    '도쿄 호텔 할인',
    '오사카 여행 패키지',
    '후쿠오카 특가 항공권'
  ]

  const recommendedProducts = [
    {
      id: 'r1',
      title: '대만 eSIM 특가',
      price: '3,500원',
      discount: '15% 할인',
      rating: 4.34,
      reviews: 76,
      company: '주식회사 링톡',
      color: '#5F7CF6',
      icon: '📱'
    },
    {
      id: 'r2',
      title: '일본 여행 패키지',
      price: '3,500원',
      discount: '15% 할인',
      rating: 4.34,
      reviews: 76,
      company: '주식회사 링톡',
      color: '#059669',
      icon: '✈️'
    },
    {
      id: 'r3',
      title: '유럽 호텔 할인',
      price: '3,500원',
      discount: '15% 할인',
      rating: 4.34,
      reviews: 76,
      company: '주식회사 링톡',
      color: '#7C3AED',
      icon: '🏨'
    }
  ]

  const handleSearchClick = (searchTerm: string) => {
    setQuery(searchTerm)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      // 검색 로직 구현
      console.log('검색:', query)
    }
  }

  return (
    <div className="search-input-screen">
      {/* 상단 상태바와 검색바 */}
      <div className="top-section">
        <div className="search-header">
          <button className="back-button" onClick={() => navigate('/')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="15,18 9,12 15,6"/>
            </svg>
          </button>
          
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <div className="search-bar">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="링톡 일본 이심 30% 할인"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </form>

        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="main-content">
        <div className="content-scroll">
          {/* 최근 검색어 */}
          <div className="search-section">
            <h3 className="section-title">최근 검색어</h3>
            <div className="search-tags-horizontal">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  className="search-tag-chip"
                  onClick={() => handleSearchClick(search)}
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* 인기 검색어 */}
          <div className="search-section">
            <h3 className="section-title">인기 검색어</h3>
            <div className="search-tags-wrap">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  className="search-tag-chip"
                  onClick={() => handleSearchClick(search)}
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* 추천 상품 */}
          <div className="search-section">
            <h3 className="section-title">추천 상품</h3>
            <div className="recommended-products">
              {recommendedProducts.map((product) => (
                <div key={product.id} className="travel-card">
                  <div className="card-image">
                    <div className="image-placeholder">
                      <span className="product-icon">{product.icon}</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="product-info">
                      <h4 className="product-title">{product.title}</h4>
                      <p className="product-price">{product.price}</p>
                    </div>
                    <div className="product-meta">
                      <div className="rating-info">
                        <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span className="rating-text">{product.rating}({product.reviews})</span>
                      </div>
                      <div className="company-info">
                        <span className="company-name">{product.company}</span>
                        <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <polyline points="9,18 15,12 9,6"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


