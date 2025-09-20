import './footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">UTIS</div>
        <div className="footer__links">
          <a href="#">회사소개</a>
          <a href="#">고객센터</a>
          <a href="#">이용약관</a>
          <a href="#">개인정보처리방침</a>
        </div>
        <div className="footer__copy">© {new Date().getFullYear()} UTIS</div>
      </div>
    </footer>
  )
}


