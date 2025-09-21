import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import { RatingStars } from './RatingStars'
import './product-card.css'

type Props = { product: Product }

export function ProductCard({ product }: Props) {
  const discount = product.originalPrice ? Math.round(100 - (product.price / product.originalPrice) * 100) : 0
  return (
    <Link className="product-card" to={`/products/${product.id}`}>
      <div className="product-card__thumb">
        <img src={product.images[0]} alt={product.title} loading="lazy" />
        {product.badge && <span className="product-card__badge">{product.badge}</span>}
      </div>
      <div className="product-card__body">
        <div className="product-card__title">{product.title}</div>
        <div className="product-card__meta">{product.city} · {product.country}</div>
        <div className="product-card__rating">
          <RatingStars value={product.rating} />
          <span>{product.rating.toFixed(1)} ({product.reviews.toLocaleString()})</span>
        </div>
        <div className="product-card__price">
          {product.originalPrice && <span className="product-card__origin">{product.originalPrice.toLocaleString()}원</span>}
          <span className="product-card__current">{product.price.toLocaleString()}원</span>
          {discount > 0 && <span className="product-card__discount">{discount}%</span>}
        </div>
      </div>
    </Link>
  )
}


