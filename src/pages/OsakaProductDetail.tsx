import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './osaka-product-detail.css'

export function OsakaProductDetail() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('상세정보')
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  // 상품 데이터 (실제로는 API에서 가져올 데이터)
  const productData = {
    id: 1,
    title: '인천국제공항 공항철도 AREX 편도티켓',
    rating: 3.8,
    reviewCount: 14,
    price: '₩ 87,700~',
    originalPrice: '₩ 269,000',
    discountPrice: '₩ 209,000',
    images: [
      '/api/placeholder/400/300',
      '/api/placeholder/400/300',
      '/api/placeholder/400/300'
    ],
    benefits: [
      '6만원 즉시 할인 (정상가) 269,000원 → 209,000',
      '구매자 전원 100% PVC 커버 1개 추가 증정',
      '독일산! PC 폴리카보네이트 100%',
      '미국에서 인증된 TSA 잠금 장치'
    ],
    satisfaction: 4.2,
    hotReviews: [
      {
        id: 1,
        author: 'djskdj434',
        rating: 4.5,
        content: '효도여행시켜준다고 딸이 주문해준 캐리어랑 베트남여행 잘...',
        image: '/api/placeholder/100/100'
      },
      {
        id: 2,
        author: 'djskdj434',
        rating: 4.5,
        content: '효도여행시켜준다고 딸이 주문 캐리어랑 베트남여행 잘...',
        image: '/api/placeholder/100/100'
      }
    ]
  }

  const tabs = [
    { id: '상세정보', label: '상세정보', count: null },
    { id: '리뷰', label: '리뷰', count: 47 },
    { id: '상품문의', label: '상품문의', count: 123 },
    { id: '이용정보', label: '이용정보', count: null }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`star ${index < Math.floor(rating) ? 'filled' : ''}`}
      >
        ★
      </span>
    ))
  }

  return (
    <div className="product-detail-page">

      {/* Header Navigation */}
      <div className="header-nav">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ←
        </button>
        <div className="nav-actions">
          <button className="share-btn"><img src="/src/assets/share.png" alt="Share" /></button>
          <button 
            className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
            onClick={() => setIsFavorite(!isFavorite)}
            aria-label={isFavorite ? '즐겨찾기 해제' : '즐겨찾기 추가'}
          >
            <img src="/src/assets/Heart.png" alt="Favorite" />
          </button>
        </div>
      </div>

      {/* Product Image */}
      <div className="product-image-section">
        <div className="main-image">
          <img 
            src={productData.images[selectedImageIndex]} 
            alt={productData.title}
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRkY2QjM1Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIj5BUkVYPC90ZXh0Pgo8L3N2Zz4='
            }}
          />
        </div>
        <div className="image-indicators">
          {productData.images.map((_, index) => (
            <div 
              key={index}
              className={`indicator ${index === selectedImageIndex ? 'active' : ''}`}
              onClick={() => setSelectedImageIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info-section">
        <div className="rating-section">
          <div className="stars">{renderStars(productData.rating)}</div>
          <span className="rating-text">{productData.rating}</span>
        </div>
        
        <h1 className="product-title">{productData.title}</h1>
        
        <div className="review-section">
          <span className="review-count">{productData.rating} ({productData.reviewCount})</span>
          <button className="review-link">리뷰보기 →</button>
        </div>

        <div className="price-section">
          <span className="current-price">{productData.price}</span>
        </div>

        {/* Benefits */}
        <div className="benefits-section">
          <div className="benefits-list">
            {productData.benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                • {benefit}
              </div>
            ))}
            <button className="more-btn">더보기</button>
          </div>
        </div>

        {/* Payment Info */}
        <div className="payment-info">
          <div className="payment-item">
            <span>배송비</span>
            <span className="free">무료</span>
          </div>
          <div className="payment-item">
            <span>무이자 할부</span>
            <span>카드 결제 혜택</span>
          </div>
        </div>

        {/* Size/Color Selection */}
        <div className="selection-section">
          <div className="selection-group">
            <label>사이즈</label>
            <div className="selection-options">
              {['S', 'M', 'L', 'XL'].map(size => (
                <button key={size} className="option-btn">{size}</button>
              ))}
            </div>
          </div>
          <div className="selection-group">
            <label>색상</label>
            <div className="selection-options">
              {['빨강', '파랑', '검정', '흰색'].map(color => (
                <button key={color} className="option-btn">{color}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Satisfaction & Reviews */}
      <div className="satisfaction-section">
        <div className="satisfaction-score">
          <div className="score-large">상품만족도 {productData.satisfaction}/5</div>
          <div className="satisfaction-text">★만족해요</div>
        </div>
        
        <div className="hot-reviews">
          <div className="section-header">
            <h3>HOT 리뷰</h3>
            <button className="more-btn">더보기 →</button>
          </div>
          
          <div className="reviews-grid">
            {productData.hotReviews.map(review => (
              <div key={review.id} className="review-card">
                <img 
                  src={review.image} 
                  alt="리뷰 이미지"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjOTRBM0FGIj5JbWFnZTwvdGV4dD4KPC9zdmc+'
                  }}
                />
                <div className="review-info">
                  <div className="review-stars">{renderStars(review.rating)}</div>
                  <div className="review-content">{review.content}</div>
                  <div className="review-author">{review.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label} {tab.count && `(${tab.count})`}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
