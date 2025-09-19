export type ProductCategory = '액티비티' | '투어' | '교통' | '숙박' | '패스'

export interface Product {
  id: string
  title: string
  city: string
  country: string
  category: ProductCategory
  rating: number
  reviews: number
  price: number
  originalPrice?: number
  badge?: string
  images: string[]
  highlights: string[]
  description: string
}

export const products: Product[] = [
  {
    id: 'p1',
    title: '홍콩 디즈니랜드 1일 입장권',
    city: '홍콩',
    country: '홍콩',
    category: '패스',
    rating: 4.8,
    reviews: 12435,
    price: 89000,
    originalPrice: 120000,
    badge: '베스트 셀러',
    images: [
      'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?w=1600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1485561998210-7143b6312ace?w=1600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600&q=80&auto=format&fit=crop'
    ],
    highlights: ['즉시 확정', '모바일 바우처', '유효기간 내 자유 이용'],
    description: '가족, 연인과 함께 하루 종일 즐기는 홍콩 디즈니랜드. 퍼레이드와 불꽃놀이까지 놓치지 마세요.'
  },
  {
    id: 'p2',
    title: '도쿄 디즈니씨 1일 패스',
    city: '도쿄',
    country: '일본',
    category: '패스',
    rating: 4.7,
    reviews: 8740,
    price: 98000,
    originalPrice: 110000,
    badge: '오늘 즉시 사용',
    images: [
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549693578-d683be217e58?w=1600&q=80&auto=format&fit=crop'
    ],
    highlights: ['QR코드 간편 입장', '인기 어트랙션 다수'],
    description: '테마와 스토리텔링이 살아있는 디즈니씨에서 하루를 보세요.'
  },
  {
    id: 'p3',
    title: '방콕 아유타야 일일 투어(한인 가이드)',
    city: '방콕',
    country: '태국',
    category: '투어',
    rating: 4.9,
    reviews: 6521,
    price: 59000,
    originalPrice: 70000,
    badge: '가성비 최고',
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1600&q=80&auto=format&fit=crop'
    ],
    highlights: ['전용 차량 이동', '입장료 포함', '호텔 픽업'],
    description: '아름다운 유적 도시 아유타야를 전문 가이드와 함께 편안하게 둘러보는 베스트 투어.'
  },
  {
    id: 'p4',
    title: '싱가포르 유니버설 스튜디오 입장권',
    city: '싱가포르',
    country: '싱가포르',
    category: '패스',
    rating: 4.6,
    reviews: 4132,
    price: 81000,
    images: [
      'https://images.unsplash.com/photo-1559076183-8a43f5d1a54f?w=1600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=1600&q=80&auto=format&fit=crop'
    ],
    highlights: ['모바일 바우처', '즉시 확정'],
    description: '최신 어트랙션과 쇼로 가득한 유니버설 스튜디오를 빠르게 입장하세요.'
  },
  {
    id: 'p5',
    title: '제주 렌터카 24시간 대여',
    city: '제주',
    country: '대한민국',
    category: '교통',
    rating: 4.5,
    reviews: 8120,
    price: 45000,
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80&auto=format&fit=crop'
    ],
    highlights: ['완전자차 선택', '모든 차량 금연'],
    description: '합리적인 가격의 렌터카로 제주를 자유롭게 여행하세요.'
  },
  {
    id: 'p6',
    title: '파리 루브르 박물관 패스트트랙',
    city: '파리',
    country: '프랑스',
    category: '패스',
    rating: 4.8,
    reviews: 9211,
    price: 69000,
    images: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=80&auto=format&fit=crop'
    ],
    highlights: ['오디오 가이드', '즉시 확정'],
    description: '세계 3대 박물관 중 하나, 루브르를 줄 없이 빠르게 입장하세요.'
  },
  {
    id: 'p7',
    title: '다낭 바나힐 골든브릿지 케이블카',
    city: '다낭',
    country: '베트남',
    category: '액티비티',
    rating: 4.7,
    reviews: 3105,
    price: 38000,
    images: [
      'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1600&q=80&auto=format&fit=crop'
    ],
    highlights: ['왕복 케이블카', '픽업 옵션'],
    description: '금빛 다리로 유명한 바나힐에서 인생 사진을 남겨보세요.'
  },
  {
    id: 'p8',
    title: '뉴욕 메트로폴리탄 미술관 입장권',
    city: '뉴욕',
    country: '미국',
    category: '패스',
    rating: 4.6,
    reviews: 2210,
    price: 52000,
    images: [
      'https://images.unsplash.com/photo-1537202108838-e7072bad1927?w=1600&q=80&auto=format&fit=crop'
    ],
    highlights: ['모바일 티켓', '유연한 날짜 선택'],
    description: '세계적인 컬렉션을 자랑하는 메트에서 예술의 바다를 느껴보세요.'
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getCategories(): ProductCategory[] {
  return Array.from(new Set(products.map(p => p.category)))
}


