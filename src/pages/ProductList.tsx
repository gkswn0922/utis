import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './list.css'

export function ProductListPage() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('일본 숙소 특가')

  const recentSearches = [
    '일본 숙소 특가',
    '도쿄 숙박 할인',
    '링톡 일본 이심 30% 할인'
  ]

  const popularSearches = [
    '일본 숙소 특가',
    '도쿄 숙박 할인',
    '링톡 일본 이심 30% 할인',
    '숙박 이용권',
    '오사카 여행 패키지 할인',
    '인기 지역 숙소 특가 진행 중'
  ]

  const handleSearchClick = (searchTerm: string) => {
    setQuery(searchTerm)
  }

  return (
    <div className="list">
      {/* 검색 헤더 */}
      <div className="search-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="15,18 9,12 15,6"/>
          </svg>
        </button>
        <div className="search-bar">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="일본 숙소 특가"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* 최근 검색어 */}
      <div className="search-section">
        <h3 className="section-title">최근 검색어</h3>
        <div className="search-tags">
          {recentSearches.map((search, index) => (
            <button
              key={index}
              className="search-tag"
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
        <div className="search-tags">
          {popularSearches.map((search, index) => (
            <button
              key={index}
              className="search-tag"
              onClick={() => handleSearchClick(search)}
            >
              {search}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}


