import { useNavigate } from 'react-router-dom'
import './search-results.css'

export function SearchResultsPage() {
  const navigate = useNavigate()

  return (
    <div className="search-results">
      <h1>검색 결과 페이지</h1>
      <button onClick={() => navigate('/products')}>뒤로가기</button>
      <p>이 페이지가 보이면 라우팅이 작동합니다!</p>
    </div>
  )
}