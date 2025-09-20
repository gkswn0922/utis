import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function ReviewsPage() {
  const navigate = useNavigate()
  const [sortBy, setSortBy] = useState('popular')

  const reviews = [
    {
      id: 1,
      title: '2025년 여름, 꼭 방문해야하는 런던 뷰 맛집',
      comments: 0,
      author: 'sdaks023',
      date: '2025.07.21.',
      views: 1549
    },
    {
      id: 2,
      title: '분위기까지, 날씨까지 완벽했던 일본 오사카',
      comments: 0,
      author: 'ilskd456',
      date: '2025.07.20.',
      views: 679
    },
    {
      id: 3,
      title: '교토의 아름다운 사찰과 전통문화 체험기',
      comments: 0,
      author: 'kyoto_lover',
      date: '2025.07.19.',
      views: 892
    },
    {
      id: 4,
      title: '도쿄의 현대적 매력과 전통의 조화',
      comments: 0,
      author: 'tokyo_explorer',
      date: '2025.07.18.',
      views: 1234
    }
  ]

  return (
    <div style={{ 
      backgroundColor: 'white', 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* 헤더 */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '16px 20px',
        borderBottom: '1px solid #eee',
        backgroundColor: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <button 
          onClick={() => navigate(-1)}
          style={{ 
            padding: '8px', 
            border: 'none', 
            background: 'none', 
            cursor: 'pointer',
            fontSize: '18px'
          }}
        >
          ←
        </button>
        <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>여행 후기글</h1>
        <button 
          style={{ 
            padding: '8px 16px', 
            border: '1px solid #e0e0e0', 
            background: 'white',
            color: '#333',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            borderRadius: '4px'
          }}
          onClick={() => console.log('글쓰기 클릭')}
        >
          글쓰기
        </button>
      </div>

      {/* 테이블 헤더 */}
      <div style={{ 
        padding: '12px 20px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        alignItems: 'center',
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#666'
      }}>
        <div style={{ flex: 1, textAlign: 'left' }}>제목</div>
        <div style={{ width: '80px', textAlign: 'center' }}>작성자</div>
        <div style={{ width: '80px', textAlign: 'center' }}>작성일</div>
        <div style={{ width: '60px', textAlign: 'center' }}>
          조회수
        </div>
      </div>

      {/* 게시판 목록 */}
      <div style={{ padding: '0 20px' }}>
        {reviews.map((review) => (
          <div 
            key={review.id} 
            style={{ 
              display: 'flex',
              alignItems: 'center',
              padding: '12px 0',
              borderBottom: '1px solid #f0f0f0',
              cursor: 'pointer',
              fontSize: '13px'
            }}
            onClick={() => console.log('리뷰 클릭:', review.id)}
          >
            {/* 제목 */}
            <div style={{ 
              flex: 1,
              textAlign: 'left',
              paddingRight: '16px',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis'
            }}>
              <span style={{ color: '#333', lineHeight: '1.4' }}>
                {review.title}
              </span>
            </div>

            {/* 작성자 */}
            <div style={{ 
              width: '80px',
              textAlign: 'center',
              paddingRight: '16px'
            }}>
              <span style={{ color: '#333', fontSize: '12px' }}>
                {review.author}
              </span>
            </div>

            {/* 작성일 */}
            <div style={{ 
              width: '80px',
              textAlign: 'center',
              paddingRight: '16px'
            }}>
              <span style={{ color: '#666', fontSize: '12px' }}>
                {review.date}
              </span>
            </div>

            {/* 조회수 */}
            <div style={{ 
              width: '60px',
              textAlign: 'center'
            }}>
              <span style={{ color: '#666', fontSize: '12px' }}>
                {review.views}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
