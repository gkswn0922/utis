import { useState } from 'react'
import './footer.css'

export function Footer() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand" onClick={() => setIsExpanded(!isExpanded)}>
          (주)유티스 사업자 정보
          <svg className={`footer__arrow ${isExpanded ? 'expanded' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="6,9 12,15 18,9"/>
          </svg>
        </div>
        
        <div className={`footer__business-info ${isExpanded ? 'expanded' : ''}`}>
          <div className="footer__info-row">상호명: (주)유티스 | 대표: 김형민</div>
          <div className="footer__info-row">주소: 서울특별시 강서구 마곡서로 158</div>
          <div className="footer__info-row">사업자등록번호: 123-45-67890</div>
          <div className="footer__info-row">통신판매업신고: 2024-서울강남-1234</div>
          <div className="footer__info-row">개인정보보호책임자: 김철수 | E-mail: info@utis.com</div>
        </div>
        
        <div className="footer__links">
          <a href="#">회사소개</a>
          <a href="#">고객센터</a>
          <a href="#">이용약관</a>
          <a href="#">개인정보처리방침</a>
        </div>
        <div className="footer__copy">
          © {new Date().getFullYear()} (주)유티스 All rights reserved.
        </div>
      </div>
    </footer>
  )
}


