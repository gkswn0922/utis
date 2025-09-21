import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './osaka-product-detail.css'

function OsakaProductDetail() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('상세정보')
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  // 상품 데이터 (실제로는 API에서 가져올 데이터)
  const productData = {
    id: 1,
    title: '루미볼트 여행용 멀티 어댑터',
    rating: 3.8,
    reviewCount: 14,
    price: '₩ 32,000~',
    originalPrice: '₩ 269,000',
    discountPrice: '₩ 209,000',
    images: [
      '/src/assets/product1.png',
      '/product2.png',
      '/product3.png'
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
        image: '/src/assets/review1.png'
      },
      {
        id: 2,
        author: 'djskdj434',
        rating: 4.5,
        content: '효도여행시켜준다고 딸이 주문 캐리어랑 베트남여행 잘...',
        image: '/src/assets/review2.png'
      },
      {
        id: 3,
        author: 'travel_lover',
        rating: 4.8,
        content: '정말 만족스러운 여행이었습니다. 다음에도 꼭 이용하고 싶어요!',
        image: '/src/assets/review3.png'
      },
      {
        id: 4,
        author: 'vacation_seeker',
        rating: 4.2,
        content: '가격 대비 정말 좋은 서비스였습니다. 추천해요!',
        image: '/src/assets/review4.png'
      },
      {
        id: 5,
        author: 'wanderlust_99',
        rating: 4.7,
        content: '친구들과 함께 가서 정말 즐거웠습니다. 기억에 남는 여행!',
        image: '/src/assets/review5.png'
      },
      {
        id: 6,
        author: 'explorer_123',
        rating: 4.3,
        content: '처음 해외여행이었는데 정말 도움이 많이 되었어요.',
        image: '/src/assets/review6.png'
      },
      {
        id: 7,
        author: 'adventure_time',
        rating: 4.6,
        content: '가족여행으로 갔는데 모두 만족했습니다. 감사해요!',
        image: '/src/assets/review7.png'
      },
      {
        id: 8,
        author: 'journey_maker',
        rating: 4.4,
        content: '혼자 여행갔는데 안전하고 편리했습니다. 추천합니다!',
        image: '/src/assets/review8.png'
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
            src="/src/assets/product1.png"
            alt={productData.title}
            onError={(e) => {
              e.currentTarget.src = '/src/assets/product1.png'
            }}
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info-section">
        <div className="rating-section">
          <div className="rating-left">
            <div className="stars">{renderStars(productData.rating)}</div>
            <span className="rating-text">{productData.rating}</span>
            <span className="review-count">({Math.floor(Math.random() * 1000) + 50}개 리뷰)</span>
          </div>
          <button className="review-link">리뷰보기 →</button>
        </div>
        
        <h1 className="product-title">{productData.title}</h1>

        <div className="price-section">
          <span className="current-price">{productData.price}</span>
        </div>

        {/* Benefits */}
        <div className="benefits-section">
          <h3 className="benefits-title">요약</h3>
          <div className="benefits-list">
            {productData.benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                {benefit}
              </div>
            ))}
          </div>
          <button className="more-btn">더보기</button>
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

      {/* Satisfaction & Reviews */}
      <div className="satisfaction-section">
        <div className="satisfaction-score">
          <h3 className="satisfaction-title">상품만족도</h3>
          <div className="rating-display">
            <span className="star-icon">★</span>
            <span className="rating-number">4.7</span>
          </div>
          <div className="review-count">850 개의 리뷰가 있습니다.</div>
        </div>
        
        <div className="hot-reviews">
          <div className="section-header">
            <h3>인기 리뷰</h3>
            <span className="more-text">더보기</span>
          </div>
          
          <div className="reviews-grid">
            {productData.hotReviews.map(review => (
              <div key={review.id} className="detail-review-card">
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

      {/* Product Detail Images */}
      <div className="product-detail-section">
        <div className="detail-images">
          <img src="/src/assets/detail1.jpg" alt="상세이미지 1" />
          <img src="/src/assets/detail2.jpg" alt="상세이미지 2" />
          <img src="/src/assets/detail3.jpg" alt="상세이미지 3" />
          <img src="/src/assets/detail4.jpg" alt="상세이미지 4" />
          <img src="/src/assets/detail5.jpg" alt="상세이미지 5" />
        </div>
      </div>
    </div>
  )
}

export default OsakaProductDetail
