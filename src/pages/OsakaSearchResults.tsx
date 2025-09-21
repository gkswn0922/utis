import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './osaka-search-results.css'

function OsakaSearchResults() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('전체')

  const tabs = ['전체', '티켓', 'eSIM', '대중교통', '여행 용품']

  const universalStudioProduct = {
    id: 1,
    image: '/api/placeholder/400/300',
    category: '티켓 • 오사카',
    title: '오사카 유니버설 스튜디오 재팬 입장권',
    features: ['오늘부터 이용 가능', '예약 즉시 확정'],
    promotion: '지금 바로 구매시 eSIM 무료 제공',
    rating: 4.8,
    reviewCount: 76225,
    selectionCount: '4M+',
    price: '₩ 87,700 부터'
  }

  const osakaCastleProduct = {
    id: 2,
    image: '/api/placeholder/400/300',
    category: '티켓 • 오사카',
    title: '오사카 성 입장권',
    features: ['오늘부터 이용 가능', '예약 즉시 확정'],
    promotion: '',
    rating: 4.7,
    reviewCount: 45678,
    selectionCount: '2M+',
    price: '₩ 45,000 부터'
  }

  const products = [universalStudioProduct, osakaCastleProduct]

  return (
    <div className="osaka-search-results-page">
      {/* Header */}
      <div className="osaka-search-header">
        <button className="osaka-back-btn" onClick={() => navigate(-1)}>
          ←
        </button>
        <h1 className="osaka-page-title">오사카 유니버셜 입장권</h1>
        <button className="osaka-menu-btn">≡</button>
      </div>

      {/* Navigation Tabs */}
      <div className="osaka-nav-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`osaka-nav-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Recommendation Text */}
      <div className="osaka-recommendation-text">
        추천 순서입니다.
      </div>

      {/* Product Cards */}
      <div className="osaka-products-container">
        {products.map((product) => (
          <div key={product.id} className="osaka-product-card" onClick={() => navigate(`/osaka/product/${product.id}`)}>
            {/* Product Image */}
            <div className="osaka-product-image">
              <img 
                src={product.image} 
                alt={product.title}
                onError={(e) => {
                  // Placeholder image for demo
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE1MCIgcj0iNTAiIGZpbGw9IiNEMUQ1REIiLz4KPHRleHQgeD0iMjAwIiB5PSIxNjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk0QTNBRiI+SW1hZ2U8L3RleHQ+Cjwvc3ZnPg=='
                }}
              />
            </div>

            {/* Product Info */}
            <div className="osaka-product-info">
              <div className="osaka-product-category">{product.category}</div>
              <h3 className="osaka-product-title">{product.title}</h3>
              
              {/* Features */}
              <div className="osaka-product-features">
                {product.features.map((feature, index) => (
                  <span key={index} className="osaka-feature-badge">
                    {feature}
                  </span>
                ))}
              </div>

              {/* Promotion */}
              {product.promotion && (
                <div className="osaka-promotion-banner">
                  {product.promotion}
                </div>
              )}

              {/* Rating and Stats */}
              <div className="osaka-product-stats">
                <div className="osaka-rating-section">
                  <div className="osaka-stars">
                    {'★'.repeat(5)}
                  </div>
                  <span className="osaka-rating-text">
                    {product.rating} ({product.reviewCount.toLocaleString()})
                  </span>
                </div>
                <div className="osaka-selection-count">
                  {product.selectionCount} 명의 선택
                </div>
              </div>

              {/* Price */}
              <div className="osaka-price-section">
                <span className="osaka-price">{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OsakaSearchResults