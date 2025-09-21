import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './search-header.css'

interface SearchHeaderProps {
  initialQuery?: string
  placeholder?: string
  onSearch?: (query: string) => void
  onQueryChange?: (query: string) => void
}

export function SearchHeader({ 
  placeholder = '일본 숙소 특가',
  onSearch,
  onQueryChange
}: SearchHeaderProps) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (onQueryChange) {
      onQueryChange(query)
    }
  }, [query, onQueryChange])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      if (onSearch) {
        onSearch(query)
      } else {
        // 기본 동작: 검색 결과 페이지로 이동 (검색어를 URL 파라미터로 전달)
        navigate(`/osaka`)
      }
    }
  }

  return (
    <div className="header-search-header">
      <button className="header-back-button" onClick={() => navigate('/')}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polyline points="15,18 9,12 15,6"/>
        </svg>
      </button>
      
      <form className="header-search-form" onSubmit={handleSearchSubmit}>
        <div className="header-search-bar">
          <svg className="header-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="header-search-input"
          />
        </div>
      </form>
    </div>
  )
}
