import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

export function LoginPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('member')
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [secureConnection, setSecureConnection] = useState(false)

  return (
    <div className="login-page">
      {/* 헤더 */}
      <div className="login-header">
        <button 
          onClick={() => navigate('/?sidebar=true')}
          className="back-button"
        >
          ←
        </button>
        <div 
          className="header-title"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          UTIS
        </div>
        <button 
          className="home-button"
          onClick={() => navigate('/')}
        >
          <img src="/src/assets/home-icon.png" alt="Home" />
        </button>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="login-content">
        {/* 제목 */}
        <h1 className="login-title">UTIS</h1>
        
        {/* 설명 텍스트 */}
        <div className="login-description">
          <p>Your travel is special</p>
          <p>당신의 여행은 특별합니다</p>
        </div>

        {/* 카카오 로그인 버튼 */}
        <button className="kakao-login-button">
          <span className="kakao-icon">💬</span>
          <span>카카오 1초 로그인/회원가입</span>
        </button>

        {/* 구글로 로그인하기 박스 */}
        <div className="google-login-box">
          <div className="google-logo">
            <img src="./src/assets/google-logo.png" alt="Google" />
          </div>
          <div className="google-text">
            <div className="google-title">구글로 로그인하기</div>
          </div>
        </div>

        {/* 카카오 회원가입 프로모션 */}
        <div className="kakao-promotion">
          <div className="promotion-text">
            <p className="promotion-small">카톡 1초 회원가입하면</p>
            <p className="promotion-large">10,000원 쿠폰</p>
          </div>
          <div className="promotion-coupon">
            <div className="coupon-text">WELCOME COUPON</div>
            <div className="coupon-envelope">📧</div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="divider">
          <div className="divider-line"></div>
          <span className="divider-text">또는</span>
          <div className="divider-line"></div>
        </div>

        {/* 탭 메뉴 */}
        <div className="tab-menu">
          <button 
            className={`tab-button ${activeTab === 'member' ? 'active' : ''}`}
            onClick={() => setActiveTab('member')}
          >
            기존 회원
          </button>
          <button 
            className={`tab-button ${activeTab === 'guest' ? 'active' : ''}`}
            onClick={() => setActiveTab('guest')}
          >
            비회원 조회
          </button>
        </div>

        {/* 입력 폼 */}
        {activeTab === 'member' && (
          <div className="login-form">
            <div className="input-group">
              <label>아이디</label>
              <input 
                type="text" 
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="아이디를 입력하세요"
              />
            </div>
            
            <div className="input-group">
              <label>비밀번호</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
              />
            </div>

            <div className="security-option">
              <span className="security-icon">🔒</span>
              <span>보안접속</span>
            </div>

            <button className="login-submit-button">
              로그인
            </button>
          </div>
        )}

        {/* 하단 링크 */}
        <div className="login-links">
          <a href="#" className="link">아이디 찾기</a>
          <span className="separator">|</span>
          <a href="#" className="link">비밀번호 찾기</a>
          <span className="separator">|</span>
          <a href="#" className="link">회원가입</a>
        </div>
      </div>
    </div>
  )
}
