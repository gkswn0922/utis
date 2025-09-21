import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProductById } from '../data/products'
import { RatingStars } from '../components/RatingStars'
import './detail.css'

export function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = id ? getProductById(id) : undefined
  if (!product) {
    return (
      <div className="detail">
        <p>상품을 찾을 수 없습니다.</p>
        <Link to="/products">목록으로 돌아가기</Link>
      </div>
    )
  }
  return (
    <div className="detail-page">
      {/* 뒤로가기 버튼 */}
      <div className="detail-page-header">
        <button className="detail-back-button" onClick={() => navigate(-1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="15,18 9,12 15,6"/>
          </svg>
        </button>
      </div>
      
      <div className="detail-page__title">
        <h1>{product.title}</h1>
        <div className="detail-page__subtitle">{product.city} · {product.country}</div>
        <div className="detail-page__rating"><RatingStars value={product.rating}/> {product.rating.toFixed(1)} ({product.reviews.toLocaleString()})</div>
      </div>
      <div className="detail-page__grid">
        <div className="detail-page__gallery">
          {product.images.map(src => (
            <img key={src} src={src} alt={product.title} loading="lazy" />
          ))}
        </div>
        <aside className="detail-page__book">
          <div className="detail-book__card">
            <div className="detail-book__price"><strong>{product.price.toLocaleString()}원</strong> {product.originalPrice && <span className="detail-book__origin">{product.originalPrice.toLocaleString()}원</span>}</div>
            <button className="detail-book__btn">예약하기</button>
            <ul className="detail-book__benefits">
              {product.highlights.map(h => <li key={h}>{h}</li>)}
            </ul>
          </div>
        </aside>
      </div>
      <section className="detail-page__desc">
        <h2>소개</h2>
        <p>{product.description}</p>
      </section>
    </div>
  )
}


