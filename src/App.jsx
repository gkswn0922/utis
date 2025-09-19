import { useState } from 'react'
import './App.css'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="home">
      {/* 검색 섹션 */}
      <div className="search-section">
        <div className="search-bar">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <span className="search-placeholder">링톡 일본 이심 30% 할인</span>
        </div>
        <div className="header-icons">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
        </div>
      </div>

      {/* 프로모션 배너 */}
      <div className="promotion-banner">
        <div className="banner-content">
          <div className="banner-text">링톡 & 유티스</div>
          <div className="banner-button">특가 확인하기</div>
        </div>
      </div>

      {/* 작은 프로모션 배너 */}
      <div className="small-promotion-banner">
        <div className="ticket-icons">
          <div className="ticket-icon-large">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"/>
            </svg>
          </div>
          <div className="ticket-icon-small">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"/>
            </svg>
          </div>
        </div>
        <div className="promotion-text">
          <div className="promotion-title">띵동!</div>
          <div className="promotion-subtitle">회원님을 위한 기프트 상품이 도착했어요.</div>
          <div className="promotion-discount">최대 10% 할인</div>
        </div>
        <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polyline points="9,18 15,12 9,6"/>
        </svg>
      </div>

      {/* 카테고리 섹션 */}
      <div className="category-section">
        <div className="category-item">
          <svg className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"/>
          </svg>
          <span>티켓</span>
        </div>
        <div className="category-item">
          <svg className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
          <span>eSIM</span>
        </div>
        <div className="category-item">
          <svg className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 16c0 .88.39 1.67 1 2.22V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10z"/>
            <circle cx="9" cy="10" r="2"/>
            <circle cx="15" cy="10" r="2"/>
          </svg>
          <span>대중교통</span>
        </div>
        <div className="category-item">
          <svg className="category-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <span>여행용품</span>
        </div>
      </div>

      {/* 인기 상품 섹션 */}
      <div className="popular-section">
        <h2>인기 상품</h2>
        <div className="popular-product-card">
          <div className="product-image">
            <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="JR 하루카 간사이 공항 특급 열차 티켓" />
          </div>
          <div className="product-info">
            <div className="product-location">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>오사카</span>
            </div>
            <h3>JR 하루카 간사이 공항 특급 열차 티켓</h3>
            <div className="product-price">
              <span className="price">₩ 11,300~</span>
              <span className="discount-badge">KRW 1,000원 할인</span>
            </div>
          </div>
        </div>
      </div>

      {/* 여행 후기 섹션 */}
      <div className="reviews-section">
        <div className="reviews-header">
          <h2>여행 후기글</h2>
          <span className="more-link">더보기 &gt;</span>
        </div>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-image">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="런던 뷰 맛집 패키지 여행" />
              <div className="heart-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div className="review-overlay">
                <h4>2025년 여름, 꼭 방문해야하는런던 뷰 맛집 패키지 여행</h4>
                <div className="review-meta">
                  <span>sdaks023</span>
                  <div className="likes">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <span>1,549</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="review-image">
              <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="일본 오사카 여행기" />
              <div className="heart-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div className="review-overlay">
                <h4>분위기까지, 날씨까지 완벽했던 일본 오사카 여행기</h4>
                <div className="review-meta">
                  <span>ilskd456</span>
                  <div className="likes">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <span>679</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="review-image">
              <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="일본 오사카 여행기" />
              <div className="heart-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div className="review-overlay">
                <h4>분위기까지, 날씨까지 완벽했던 일본 오사카 여행기</h4>
                <div className="review-meta">
                  <span>ilskd456</span>
                  <div className="likes">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <span>679</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="review-image">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="런던 뷰 맛집 패키지 여행" />
              <div className="heart-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div className="review-overlay">
                <h4>2025년 여름, 꼭 방문해야하는런던 뷰 맛집 패키지 여행</h4>
                <div className="review-meta">
                  <span>sdaks023</span>
                  <div className="likes">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <span>1,549</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 네비게이션 */}
      <div className="bottom-navigation">
        <div className={`nav-item ${selectedIndex === 0 ? 'active' : ''}`} onClick={() => setSelectedIndex(0)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
          <span>홈</span>
        </div>
        <div className={`nav-item ${selectedIndex === 1 ? 'active' : ''}`} onClick={() => setSelectedIndex(1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
          <span>스토어</span>
        </div>
        <div className={`nav-item ${selectedIndex === 2 ? 'active' : ''}`} onClick={() => setSelectedIndex(2)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="17,1 21,5 17,9"/>
            <path d="M3 11V9a2 2 0 0 1 2-2h14"/>
            <polyline points="7,23 3,19 7,15"/>
            <path d="M21 13v2a2 2 0 0 1-2 2H5"/>
          </svg>
          <span>중고장터</span>
        </div>
        <div className={`nav-item ${selectedIndex === 3 ? 'active' : ''}`} onClick={() => setSelectedIndex(3)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          <span>마이페이지</span>
        </div>
      </div>
    </div>
  )
}

export default App