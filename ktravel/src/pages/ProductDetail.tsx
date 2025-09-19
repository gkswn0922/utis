import { useParams, Link } from 'react-router-dom'
import { getProductById } from '../data/products'
import { RatingStars } from '../components/RatingStars'
import './detail.css'

export function ProductDetailPage() {
  const { id } = useParams()
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
    <div className="detail">
      <div className="detail__title">
        <h1>{product.title}</h1>
        <div className="detail__subtitle">{product.city} · {product.country}</div>
        <div className="detail__rating"><RatingStars value={product.rating}/> {product.rating.toFixed(1)} ({product.reviews.toLocaleString()})</div>
      </div>
      <div className="detail__grid">
        <div className="detail__gallery">
          {product.images.map(src => (
            <img key={src} src={src} alt={product.title} loading="lazy" />
          ))}
        </div>
        <aside className="detail__book">
          <div className="book__card">
            <div className="book__price"><strong>{product.price.toLocaleString()}원</strong> {product.originalPrice && <span className="book__origin">{product.originalPrice.toLocaleString()}원</span>}</div>
            <button className="book__btn">예약하기</button>
            <ul className="book__benefits">
              {product.highlights.map(h => <li key={h}>{h}</li>)}
            </ul>
          </div>
        </aside>
      </div>
      <section className="detail__desc">
        <h2>소개</h2>
        <p>{product.description}</p>
      </section>
    </div>
  )
}


