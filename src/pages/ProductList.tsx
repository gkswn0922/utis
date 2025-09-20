import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { SearchHeader } from '../components/SearchHeader'
import { products } from '../data/products'
import thumbnail1 from '../assets/썸네일-1.png'
import thumbnail2 from '../assets/썸네일-2.png'
import thumbnail3 from '../assets/썸네일-3.png'
import thumbnail4 from '../assets/썸네일-4.png'
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
      title: '일본 eSIM 5G 무제한',
      price: '1,090원',
      discount: '15% 할인',
      rating: 4.34,
      reviews: 76,
      company: '링톡',
      color: '#5F7CF6',
      icon: '📱',
      thumbnail: thumbnail1
    },
    {
      id: 'r2',
      title: '루미볼트 여행용 멀티어댑터',
      price: '32,900원',
      discount: '15% 할인',
      rating: 4.86,
      reviews: 485,
      company: 'TRIP+',
      color: '#059669',
      icon: '✈️',
      thumbnail: thumbnail2
    },
    {
      id: 'r3',
      title: '퓨어리 여행용 샤워필터',
      price: '16,500원',
      discount: '15% 할인',
      rating: 4.88,
      reviews: 2925,
      company: 'TRIP+',
      color: '#7C3AED',
      icon: '🏨',
      thumbnail: thumbnail3
    },
    {
      id: 'r4',
      title: 'QR 20,26인치 여행용 캐리어',
      price: '209,000원',
      discount: '15% 할인',
      rating: 4.9,
      reviews: 850,
      company: 'QR',
      color: '#DC2626',
      icon: '🇺🇸',
      thumbnail: thumbnail4
    }
  ]

  const handleSearchClick = (searchTerm: string) => {
    setQuery(searchTerm)
  }

  const handleSearch = (searchQuery: string) => {
    console.log('검색:', searchQuery)
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
  }

  return (
    <div className="list">
      {/* 검색 헤더 */}
      <SearchHeader 
        initialQuery={query}
        placeholder="일본 숙소 특가"
        onSearch={handleSearch}
      />

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
                    <img src={product.thumbnail} alt={product.title} className="thumbnail-image" />
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


