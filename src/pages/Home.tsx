import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import './home.css'

export function HomePage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    // URL 파라미터에서 sidebar=true가 있으면 사이드바 열기
    if (searchParams.get('sidebar') === 'true') {
      setIsSidebarOpen(true)
      // URL에서 파라미터 제거
      navigate('/', { replace: true })
    }
  }, [searchParams, navigate])

  return (
    <div className="home-page">

      {/* 검색 섹션 */}
      <div className="search-section">
        <div className="utis-logo">UTIS</div>
        <div className="search-bar" onClick={() => navigate('/products')}>
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <span className="search-placeholder">링톡 일본 이심 30% 할인</span>
        </div>
        <div className="hamburger-menu" onClick={() => setIsSidebarOpen(true)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </div>
      </div>

      {/* 프로모션 배너 */}
      <div className="promotion-banner">
        <div className="banner-content">
          <div className="banner-text">광고</div>
          <div className="banner-button">특가 확인하기</div>
        </div>
      </div>

      {/* 작은 프로모션 배너 */}
      <div className="small-promotion-banner">
        <div className="ticket-icons">
          <div className="ticket-icon-large">
            <img src="/src/assets/megaphone.png" alt="Megaphone" />
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
          <svg className="category-icon" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M505.81,176.44l-47.07-47.07c-7.87-7.77-20.38-8.23-28.8-1.07c-13.01,11.07-32.34,10.33-44.46-1.71c-12.03-12.12-12.77-31.44-1.71-44.45c7.16-8.43,6.7-20.93-1.07-28.8L335.58,6.22c-8.29-8.27-21.72-8.27-30.01,0l-75.04,75.03c-4.63,4.65-8.13,10.31-10.21,16.53c-0.82,2.43-2.73,4.33-5.15,5.15c-6.23,2.08-11.89,5.58-16.53,10.22L6.21,305.59c-8.27,8.29-8.27,21.72,0,30.01l47.13,47.07c7.87,7.77,20.38,8.23,28.8,1.07c13.71-11.79,34.38-10.24,46.17,3.47c10.56,12.27,10.56,30.42,0,42.7c-7.16,8.43-6.7,20.93,1.07,28.8l47.07,47.07c8.29,8.27,21.72,8.27,30.01,0l192.43-192.43c4.64-4.64,8.13-10.3,10.22-16.52c0.82-2.43,2.73-4.34,5.16-5.16c6.22-2.08,11.88-5.58,16.52-10.21l75.03-75.04C514.06,198.12,514.06,184.73,505.81,176.44z M262.21,144.82c-6.66,6.67-17.47,6.67-24.14,0l0,0l-12.28-12.28c-6.57-6.76-6.41-17.57,0.36-24.13c6.62-6.43,17.16-6.43,23.78,0.01l12.28,12.27C268.87,127.34,268.87,138.15,262.21,144.82L262.21,144.82z M309.14,191.75c-6.66,6.66-17.46,6.66-24.13,0l-11.73-11.73c-6.67-6.67-6.67-17.47,0-24.14c6.67-6.67,17.47-6.67,24.14,0l11.73,11.73c6.68,6.65,6.7,17.46,0.05,24.14l-0.03,0.03L309.14,191.75z M356.08,238.69c-6.66,6.67-17.47,6.67-24.14,0l0,0l-11.73-11.73c-6.57-6.76-6.41-17.57,0.36-24.13c6.62-6.43,17.16-6.43,23.78,0.01l11.73,11.73c6.69,6.64,6.74,17.44,0.1,24.14l-0.05,0.05L356.08,238.69z M403.47,286.2c-6.66,6.67-17.47,6.67-24.14,0l0,0l-12.2-12.27c-6.74-6.58-6.87-17.39-0.29-24.14c6.58-6.74,17.39-6.87,24.14-0.29c0.12,0.11,0.23,0.23,0.35,0.35l12.21,12.26c6.66,6.67,6.66,17.47-0.01,24.14l0,0L403.47,286.2z"/>
          </svg>
          <span>티켓</span>
        </div>
        <div className="category-item">
          <svg className="category-icon" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M128,0h178.7c17,0,33.3,6.7,45.3,18.7L429.3,96c12,12,18.7,28.3,18.7,45.3V448c0,35.3-28.7,64-64,64H128c-35.3,0-64-28.7-64-64V64C64,28.7,92.7,0,128,0z M160,192c-17.7,0-32,14.3-32,32v32h64v-64H160z M128,352h80h96h80v-64h-80h-96h-80V352z M384,224c0-17.7-14.3-32-32-32h-32v64h64V224z M224,192v64h64v-64H224z M352,448c17.7,0,32-14.3,32-32v-32h-64v64H352z M224,384v64h64v-64H224z M128,416c0,17.7,14.3,32,32,32h32v-64h-64V416z"/>
          </svg>
          <span>eSIM</span>
        </div>
        <div className="category-item">
          <svg className="category-icon" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M366,0H146c-40.1,0-73.7,32.6-73.7,73.7v265.8c0,40.1,32.6,73.7,73.7,73.7H366c40.1,0,73.7-32.6,73.7-73.7V73.7C438.8,32.6,406.1,0,366,0z M191.7,27h128.7c4.7,0,9.3,3.7,9.3,9.3s-3.7,9.3-9.3,9.3H191.7c-4.7,0-9.3-3.7-9.3-9.3S187,27,191.7,27z M155.3,375.8c-17.7,0-31.7-14-31.7-31.7c0-17.7,14-31.7,31.7-31.7s31.7,14,31.7,31.7C187,361.9,173,375.8,155.3,375.8z M356.7,375.8c-17.7,0-31.7-14-31.7-31.7c0-17.7,14-31.7,31.7-31.7c17.7,0,31.7,14,31.7,31.7C388.4,361.9,374.4,375.8,356.7,375.8z M402.4,201.4c0,10.3-8.4,18.7-18.7,18.7H128.2c-10.3,0-18.7-8.4-18.7-18.7v-110c0-10.3,8.4-18.7,18.7-18.7h256.5c10.3,0,18.7,8.4,18.7,18.7v110H402.4z M413.6,485l-56.9-55c-6.5-6.5-16.8-5.6-22.4,0s-5.6,16.8,0,22.4l6.5,6.5H171.1l6.5-6.5c6.5-6.5,6.5-15.9,0-22.4c-6.5-6.5-15.9-6.5-22.4,0l-56.9,55c-6.5,6.5-6.5,15.9,0,22.4c2.8,3.7,7.5,4.7,11.2,4.7c3.7,0,8.4-1.9,11.2-4.7l16.8-15.9h236.9l16.8,15.9c2.8,2.8,7.5,4.7,11.2,4.7c4.7,0,8.4-1.9,11.2-4.7C420.1,501.7,420.1,491.5,413.6,485L413.6,485z"/>
          </svg>
          <span>대중교통</span>
        </div>
        <div className="category-item">
          <svg className="category-icon" viewBox="0 0 122.88 99.83" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.79,17.04h10.27v82.79H8.79C3.95,99.83,0,95.88,0,91.04V25.82C0,20.99,3.95,17.04,8.79,17.04L8.79,17.04z M52.34,0h17.49c5.44,0,9.89,4.45,9.89,9.89v5.28h-6.3v-5.3c0-1.91-1.56-3.47-3.47-3.47H52.22c-1.91,0-3.47,1.56-3.47,3.47v5.3 h-6.3V9.89C42.45,4.45,46.9,0,52.34,0L52.34,0z M24.28,17.04h73.15v82.79H24.28V17.04L24.28,17.04z M102.65,17.04h11.44 c4.83,0,8.79,3.95,8.79,8.79v65.22c0,4.83-3.95,8.79-8.79,8.79h-11.44V17.04L102.65,17.04z"/>
          </svg>
          <span>여행용품</span>
        </div>
      </div>

      {/* 인기 상품 섹션 */}
      <div className="popular-section">
        <h2>인기 상품</h2>
        <div className="products-container">
          <div className="products-scroll">
            <div className="popular-product-card" onClick={() => navigate('/products/p1')}>
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="JR 하루카 간사이 공항 특급 열차 티켓" />
                <div className="product-location">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>오사카</span>
                </div>
              </div>
              <div className="product-info">
                <h3>JR 하루카 간사이 공항 특급 열차 티켓</h3>
                <div className="product-price">
                  <span className="price">₩ 11,300~</span>
                  <span className="discount-badge">KRW 1,000원 할인</span>
                </div>
              </div>
            </div>
            
            <div className="popular-product-card" onClick={() => navigate('/products/p2')}>
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="도쿄 디즈니랜드 티켓" />
                <div className="product-location">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>도쿄</span>
                </div>
              </div>
              <div className="product-info">
                <h3>도쿄 디즈니랜드 1일 패스</h3>
                <div className="product-price">
                  <span className="price">₩ 89,000~</span>
                  <span className="discount-badge">KRW 5,000원 할인</span>
                </div>
              </div>
            </div>
            
            <div className="popular-product-card" onClick={() => navigate('/products/p3')}>
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="교토 버스 패스" />
                <div className="product-location">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>교토</span>
                </div>
              </div>
              <div className="product-info">
                <h3>교토 시내 버스 1일 패스</h3>
                <div className="product-price">
                  <span className="price">₩ 6,500~</span>
                  <span className="discount-badge">KRW 500원 할인</span>
                </div>
              </div>
            </div>
            
            <div className="popular-product-card" onClick={() => navigate('/products/p4')}>
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="유니버설 스튜디오 재팬 티켓" />
                <div className="product-location">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>오사카</span>
                </div>
              </div>
              <div className="product-info">
                <h3>유니버설 스튜디오 재팬 티켓</h3>
                <div className="product-price">
                  <span className="price">₩ 95,000~</span>
                  <span className="discount-badge">KRW 8,000원 할인</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 여행 후기 섹션 */}
      <div className="reviews-section">
        <div className="reviews-header">
          <h2>여행 후기글</h2>
          <span className="more-link" onClick={() => navigate('/reviews')}>더보기 &gt;</span>
        </div>
        <div className="reviews-container">
          <div className="reviews-row">
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
          </div>
          
          <div className="reviews-row">
            <div className="review-card">
              <div className="review-image">
                <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="교토 여행기" />
                <div className="heart-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <div className="review-overlay">
                  <h4>교토의 아름다운 사찰과 전통문화 체험기</h4>
                  <div className="review-meta">
                    <span>kyoto_lover</span>
                    <div className="likes">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                      <span>892</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="review-card">
              <div className="review-image">
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="도쿄 여행기" />
                <div className="heart-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <div className="review-overlay">
                  <h4>도쿄의 현대적 매력과 전통의 조화</h4>
                  <div className="review-meta">
                    <span>tokyo_explorer</span>
                    <div className="likes">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                      <span>1,234</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 사이드바 */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  )
}