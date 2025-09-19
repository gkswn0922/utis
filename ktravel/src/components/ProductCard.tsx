import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import { RatingStars } from './RatingStars'
import './product-card.css'

type Props = { product: Product }

export function ProductCard({ product }: Props) {
  const discount = product.originalPrice ? Math.round(100 - (product.price / product.originalPrice) * 100) : 0
  return (
    <Link className="p-card" to={`/products/${product.id}`}>
      <div className="p-card__thumb">
        <img src={product.images[0]} alt={product.title} loading="lazy" />
        {product.badge && <span className="p-card__badge">{product.badge}</span>}
      </div>
      <div className="p-card__body">
        <div className="p-card__title">{product.title}</div>
        <div className="p-card__meta">{product.city} · {product.country}</div>
        <div className="p-card__rating">
          <RatingStars value={product.rating} />
          <span>{product.rating.toFixed(1)} ({product.reviews.toLocaleString()})</span>
        </div>
        <div className="p-card__price">
          {product.originalPrice && <span className="p-card__origin">{product.originalPrice.toLocaleString()}원</span>}
          <span className="p-card__current">{product.price.toLocaleString()}원</span>
          {discount > 0 && <span className="p-card__discount">{discount}%</span>}
        </div>
      </div>
    </Link>
  )
}


