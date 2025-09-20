import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './sidebar.css'

export function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const navigate = useNavigate()

  if (!isOpen) return null

  return (
    <div className="sidebar-overlay" onClick={onClose}>
      <div className="sidebar" onClick={(e) => e.stopPropagation()}>
        {/* 헤더 */}
        <div className="sidebar-header">
          <div className="header-content">
            <div className="logo">UTIS</div>
            <div className="search-bar">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <span className="search-text">어디로 가세요?</span>
            </div>
            <button className="close-button" onClick={onClose}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        {/* 액션 버튼들 */}
        <div className="action-buttons">
          <button className="search-button">예약 검색</button>
          <button className="login-button" onClick={() => navigate('/login')}>로그인/회원가입</button>
        </div>

        {/* 메뉴 섹션들 */}
        <div className="menu-sections">
          {/* 여행 상품/서비스 메뉴 */}
          <div className="menu-section">
            <h4 className="section-title">여행 상품/서비스 메뉴</h4>
            <div className="menu-items">
              <div className="menu-item">
                <span>티켓</span>
                <svg className="menu-icon" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M505.81,176.44l-47.07-47.07c-7.87-7.77-20.38-8.23-28.8-1.07c-13.01,11.07-32.34,10.33-44.46-1.71c-12.03-12.12-12.77-31.44-1.71-44.45c7.16-8.43,6.7-20.93-1.07-28.8L335.58,6.22c-8.29-8.27-21.72-8.27-30.01,0l-75.04,75.03c-4.63,4.65-8.13,10.31-10.21,16.53c-0.82,2.43-2.73,4.33-5.15,5.15c-6.23,2.08-11.89,5.58-16.53,10.22L6.21,305.59c-8.27,8.29-8.27,21.72,0,30.01l47.13,47.07c7.87,7.77,20.38,8.23,28.8,1.07c13.71-11.79,34.38-10.24,46.17,3.47c10.56,12.27,10.56,30.42,0,42.7c-7.16,8.43-6.7,20.93,1.07,28.8l47.07,47.07c8.29,8.27,21.72,8.27,30.01,0l192.43-192.43c4.64-4.64,8.13-10.3,10.22-16.52c0.82-2.43,2.73-4.34,5.16-5.16c6.22-2.08,11.88-5.58,16.52-10.21l75.03-75.04C514.06,198.12,514.06,184.73,505.81,176.44z M262.21,144.82c-6.66,6.67-17.47,6.67-24.14,0l0,0l-12.28-12.28c-6.57-6.76-6.41-17.57,0.36-24.13c6.62-6.43,17.16-6.43,23.78,0.01l12.28,12.27C268.87,127.34,268.87,138.15,262.21,144.82L262.21,144.82z M309.14,191.75c-6.66,6.66-17.46,6.66-24.13,0l-11.73-11.73c-6.67-6.67-6.67-17.47,0-24.14c6.67-6.67,17.47-6.67,24.14,0l11.73,11.73c6.68,6.65,6.7,17.46,0.05,24.14l-0.03,0.03L309.14,191.75z M356.08,238.69c-6.66,6.67-17.47,6.67-24.14,0l0,0l-11.73-11.73c-6.57-6.76-6.41-17.57,0.36-24.13c6.62-6.43,17.16-6.43,23.78,0.01l11.73,11.73c6.69,6.64,6.74,17.44,0.1,24.14l-0.05,0.05L356.08,238.69z M403.47,286.2c-6.66,6.67-17.47,6.67-24.14,0l0,0l-12.2-12.27c-6.74-6.58-6.87-17.39-0.29-24.14c6.58-6.74,17.39-6.87,24.14-0.29c0.12,0.11,0.23,0.23,0.35,0.35l12.21,12.26c6.66,6.67,6.66,17.47-0.01,24.14l0,0L403.47,286.2z"/>
                </svg>
              </div>
              <div className="menu-item">
                <span>eSIM</span>
                <svg className="menu-icon" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,0h178.7c17,0,33.3,6.7,45.3,18.7L429.3,96c12,12,18.7,28.3,18.7,45.3V448c0,35.3-28.7,64-64,64H128c-35.3,0-64-28.7-64-64V64C64,28.7,92.7,0,128,0z M160,192c-17.7,0-32,14.3-32,32v32h64v-64H160z M128,352h80h96h80v-64h-80h-96h-80V352z M384,224c0-17.7-14.3-32-32-32h-32v64h64V224z M224,192v64h64v-64H224z M352,448c17.7,0,32-14.3,32-32v-32h-64v64H352z M224,384v64h64v-64H224z M128,416c0,17.7,14.3,32,32,32h32v-64h-64V416z"/>
                </svg>
              </div>
              <div className="menu-item">
                <span>대중교통</span>
                <svg className="menu-icon" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M366,0H146c-40.1,0-73.7,32.6-73.7,73.7v265.8c0,40.1,32.6,73.7,73.7,73.7H366c40.1,0,73.7-32.6,73.7-73.7V73.7C438.8,32.6,406.1,0,366,0z M191.7,27h128.7c4.7,0,9.3,3.7,9.3,9.3s-3.7,9.3-9.3,9.3H191.7c-4.7,0-9.3-3.7-9.3-9.3S187,27,191.7,27z M155.3,375.8c-17.7,0-31.7-14-31.7-31.7c0-17.7,14-31.7,31.7-31.7s31.7,14,31.7,31.7C187,361.9,173,375.8,155.3,375.8z M356.7,375.8c-17.7,0-31.7-14-31.7-31.7c0-17.7,14-31.7,31.7-31.7c17.7,0,31.7,14,31.7,31.7C388.4,361.9,374.4,375.8,356.7,375.8z M402.4,201.4c0,10.3-8.4,18.7-18.7,18.7H128.2c-10.3,0-18.7-8.4-18.7-18.7v-110c0-10.3,8.4-18.7,18.7-18.7h256.5c10.3,0,18.7,8.4,18.7,18.7v110H402.4z M413.6,485l-56.9-55c-6.5-6.5-16.8-5.6-22.4,0s-5.6,16.8,0,22.4l6.5,6.5H171.1l6.5-6.5c6.5-6.5,6.5-15.9,0-22.4c-6.5-6.5-15.9-6.5-22.4,0l-56.9,55c-6.5,6.5-6.5,15.9,0,22.4c2.8,3.7,7.5,4.7,11.2,4.7c3.7,0,8.4-1.9,11.2-4.7l16.8-15.9h236.9l16.8,15.9c2.8,2.8,7.5,4.7,11.2,4.7c4.7,0,8.4-1.9,11.2-4.7C420.1,501.7,420.1,491.5,413.6,485L413.6,485z"/>
                </svg>
              </div>
              <div className="menu-item">
                <span>여행용품</span>
                <svg className="menu-icon" viewBox="0 0 122.88 99.83" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.79,17.04h10.27v82.79H8.79C3.95,99.83,0,95.88,0,91.04V25.82C0,20.99,3.95,17.04,8.79,17.04L8.79,17.04z M52.34,0h17.49c5.44,0,9.89,4.45,9.89,9.89v5.28h-6.3v-5.3c0-1.91-1.56-3.47-3.47-3.47H52.22c-1.91,0-3.47,1.56-3.47,3.47v5.3 h-6.3V9.89C42.45,4.45,46.9,0,52.34,0L52.34,0z M24.28,17.04h73.15v82.79H24.28V17.04L24.28,17.04z M102.65,17.04h11.44 c4.83,0,8.79,3.95,8.79,8.79v65.22c0,4.83-3.95,8.79-8.79,8.79h-11.44V17.04L102.65,17.04z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* 기타 */}
          <div className="menu-section">
            <h4 className="section-title">기타</h4>
            <div className="menu-items">
              <div className="menu-item">
                <span>고객센터</span>
                <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0-5h2m-2 0v5"/>
                </svg>
              </div>
              <div className="menu-item">
                <span>협업 문의</span>
                <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div className="menu-item">
                <span>앱 다운로드</span>
                <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
