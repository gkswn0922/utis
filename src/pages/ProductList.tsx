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
  const [searchQuery, setSearchQuery] = useState('')

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

  // 연관 검색어 데이터
  const getRelatedSearches = (query: string) => {
    if (!query.trim()) return []
    
    const relatedSearchesMap: { [key: string]: string[] } = {
      '일본': ['일본 숙소 특가', '일본 항공권', '일본 여행 패키지', '일본 eSIM', '일본 교통패스'],
      '도쿄': ['도쿄 호텔 할인', '도쿄 디즈니랜드', '도쿄 관광지', '도쿄 맛집', '도쿄 쇼핑'],
      '오사카': ['오사카 여행 패키지', '오사카 유니버설 스튜디오', '오사카 숙소', '오사카 음식', '오사카 관광'],
      '교토': ['교토 사찰 투어', '교토 전통문화', '교토 한복 체험', '교토 맛집', '교토 숙소'],
      '후쿠오카': ['후쿠오카 특가 항공권', '후쿠오카 온천', '후쿠오카 맛집', '후쿠오카 관광', '후쿠오카 숙소'],
      '호텔': ['도쿄 호텔 할인', '오사카 호텔', '교토 호텔', '후쿠오카 호텔', '일본 호텔 패키지'],
      '항공권': ['일본 항공권', '후쿠오카 특가 항공권', '도쿄 항공권', '오사카 항공권', '교토 항공권'],
      'eSIM': ['일본 eSIM', '도쿄 eSIM', '오사카 eSIM', '일본 무제한 데이터', '일본 로밍'],
      '여행': ['일본 여행 패키지', '오사카 여행 패키지', '도쿄 여행', '교토 여행', '후쿠오카 여행']
    }

    // 입력된 검색어와 관련된 연관 검색어 찾기
    for (const [keyword, related] of Object.entries(relatedSearchesMap)) {
      if (query.toLowerCase().includes(keyword.toLowerCase())) {
        return related
      }
    }

    // 기본 연관 검색어
    return ['일본 숙소 특가', '도쿄 호텔 할인', '오사카 여행 패키지', '일본 eSIM', '일본 항공권']
  }

  const relatedSearches = getRelatedSearches(searchQuery)

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
    navigate(`/osaka`)
  }

  const handleQueryChange = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <div className="list">
      {/* 검색 헤더 */}
      <SearchHeader 
        initialQuery={query}
        placeholder="일본 숙소 특가"
        onSearch={handleSearch}
        onQueryChange={handleQueryChange}
      />

      {/* 메인 콘텐츠 */}
      <div className="main-content">
        <div className="content-scroll">
         

          {/* 검색어 섹션 - 입력이 있으면 연관 검색어, 없으면 인기 검색어 */}
          <div className="search-section">
            {!searchQuery.trim() && (
              <h3 className="section-title">인기 검색어</h3>
            )}
            {searchQuery.trim() ? (
              <div className="related-searches-list">
                {relatedSearches.map((search, index) => (
                  <div
                    key={index}
                    className="related-search-item"
                    onClick={() => handleSearchClick(search)}
                  >
                    <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="m21 21-4.35-4.35"/>
                    </svg>
                    <span className="search-text">{search}</span>
                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="9,18 15,12 9,6"/>
                    </svg>
                  </div>
                ))}
              </div>
            ) : (
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
            )}
          </div>

          {/* 추천 상품 */}
          <div className="search-section">
            <h3 className="section-title">오직 유티스에서만!</h3>
            <div className="recommended-products">
              {recommendedProducts.map((product) => (
                <div key={product.id} className="travel-card" onClick={() => navigate(`/osaka/product/${product.id}`)}>
                  <div className="card-image">
                    <img src={product.thumbnail} alt={product.title} className="thumbnail-image" />
                  </div>
                  <div className="card-content">
                    <div className="product-info">
                      <h4 className="product-title">{product.title}</h4>
                      <div className="price-container">
                        <p className="product-price">{product.price}</p>
                        <div className="delivery-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <rect x="1" y="3" width="15" height="13"/>
                            <polygon points="16,8 20,8 23,11 23,16 16,16"/>
                            <circle cx="5.5" cy="18.5" r="2.5"/>
                            <circle cx="18.5" cy="18.5" r="2.5"/>
                          </svg>
                        </div>
                        <span className="airport-pickup">공항수령 가능!</span>
                      </div>
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


