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

      {/* 상품문의 섹션 */}
      <section className="product-inquiry-section">
        <div className="inquiry-header">
          <h2>상품문의</h2>
          <div className="inquiry-actions">
            <button className="inquiry-btn active">문의하기</button>
            <button className="inquiry-btn">내 문의글</button>
          </div>
        </div>
        
        <div className="search-box">
          <div className="search-icon">🔍</div>
          <input type="text" placeholder="검색어를 입력하세요" />
        </div>

        <div className="faq-section">
          <h3>자주묻는 질문</h3>
          <div className="faq-tags">
            <button className="faq-tag active">회원가입</button>
            <button className="faq-tag">환불규정</button>
            <button className="faq-tag">예약안내</button>
            <button className="faq-tag">마이페이지</button>
            <button className="faq-tag">결제내역</button>
            <button className="faq-tag">일정변경</button>
            <button className="faq-tag">리뷰작성</button>
            <button className="faq-tag">계정정보</button>
          </div>
        </div>

        <div className="inquiry-list">
          <div className="inquiry-item">
            <div className="inquiry-content">
              <div className="inquiry-icon">🔒</div>
              <div className="inquiry-text">
                <div className="inquiry-title">[결제] 카드 변경 후 재예약 가능할까요?</div>
                <div className="inquiry-preview">비공개 상품문의입니다.</div>
              </div>
            </div>
            <div className="inquiry-meta">
              <div className="inquiry-author">이동민</div>
              <div className="inquiry-date">2025-09-19 | 12:22:56</div>
              <div className="inquiry-status completed">답변완료</div>
            </div>
          </div>

          <div className="inquiry-item">
            <div className="inquiry-content">
              <div className="inquiry-icon">🔒</div>
              <div className="inquiry-text">
                <div className="inquiry-title">[환불] 취소 수수료 관련 문의</div>
                <div className="inquiry-preview">제가 어제 하나카드로 결제진행했었는데...</div>
              </div>
            </div>
            <div className="inquiry-meta">
              <div className="inquiry-author">김민수</div>
              <div className="inquiry-date">2025-09-18 | 15:30:12</div>
              <div className="inquiry-status completed">답변완료</div>
            </div>
          </div>

          <div className="inquiry-item">
            <div className="inquiry-content">
              <div className="inquiry-icon">🔒</div>
              <div className="inquiry-text">
                <div className="inquiry-title">[예약] 일정 변경 가능한가요?</div>
                <div className="inquiry-preview">비공개 상품문의입니다.</div>
              </div>
            </div>
            <div className="inquiry-meta">
              <div className="inquiry-author">박지영</div>
              <div className="inquiry-date">2025-09-17 | 09:15:45</div>
              <div className="inquiry-status pending">미답변</div>
            </div>
          </div>

          <div className="inquiry-item">
            <div className="inquiry-content">
              <div className="inquiry-icon">🔒</div>
              <div className="inquiry-text">
                <div className="inquiry-title">[배송] 언제까지 도착하나요?</div>
                <div className="inquiry-preview">비공개 상품문의입니다.</div>
              </div>
            </div>
            <div className="inquiry-meta">
              <div className="inquiry-author">정수진</div>
              <div className="inquiry-date">2025-09-16 | 14:20:30</div>
              <div className="inquiry-status completed">답변완료</div>
            </div>
          </div>

          <div className="inquiry-item">
            <div className="inquiry-content">
              <div className="inquiry-icon">🔒</div>
              <div className="inquiry-text">
                <div className="inquiry-title">[상품] 옵션 변경 가능한가요?</div>
                <div className="inquiry-preview">비공개 상품문의입니다.</div>
              </div>
            </div>
            <div className="inquiry-meta">
              <div className="inquiry-author">최영희</div>
              <div className="inquiry-date">2025-09-15 | 11:45:22</div>
              <div className="inquiry-status pending">미답변</div>
            </div>
          </div>

          <div className="inquiry-item">
            <div className="inquiry-content">
              <div className="inquiry-icon">🔒</div>
              <div className="inquiry-text">
                <div className="inquiry-title">[쿠폰] 할인 쿠폰 사용법</div>
                <div className="inquiry-preview">비공개 상품문의입니다.</div>
              </div>
            </div>
            <div className="inquiry-meta">
              <div className="inquiry-author">이준호</div>
              <div className="inquiry-date">2025-09-14 | 16:10:15</div>
              <div className="inquiry-status completed">답변완료</div>
            </div>
          </div>

          <div className="inquiry-item">
            <div className="inquiry-content">
              <div className="inquiry-icon">🔒</div>
              <div className="inquiry-text">
                <div className="inquiry-title">[회원] 비밀번호 변경 문의</div>
                <div className="inquiry-preview">비공개 상품문의입니다.</div>
              </div>
            </div>
            <div className="inquiry-meta">
              <div className="inquiry-author">강민지</div>
              <div className="inquiry-date">2025-09-13 | 13:25:40</div>
              <div className="inquiry-status completed">답변완료</div>
            </div>
          </div>
        </div>

        <div className="pagination">
          <button className="pagination-btn">←</button>
          <span className="pagination-info">3 / 78</span>
          <button className="pagination-btn">→</button>
        </div>
      </section>
    </div>
  )
}


