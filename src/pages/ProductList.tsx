import { useMemo, useState } from 'react'
import { products, type Product, getCategories } from '../data/products'
import { ProductCard } from '../components/ProductCard'
import './list.css'

type SortKey = 'popular' | 'priceLow' | 'priceHigh' | 'rating'

export function ProductListPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('전체')
  const [sort, setSort] = useState<SortKey>('popular')

  const categories = ['전체', ...getCategories()]

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list: Product[] = products.filter(p => {
      const inCategory = category === '전체' || p.category === category
      const inText = !q || `${p.title} ${p.city} ${p.country}`.toLowerCase().includes(q)
      return inCategory && inText
    })
    switch (sort) {
      case 'priceLow': list = list.sort((a,b)=>a.price-b.price); break
      case 'priceHigh': list = list.sort((a,b)=>b.price-a.price); break
      case 'rating': list = list.sort((a,b)=>b.rating-a.rating); break
      default: list = list.sort((a,b)=>b.reviews-a.reviews) // popular
    }
    return list
  }, [query, category, sort])

  return (
    <div className="list">
      <div className="list__controls">
        <input
          placeholder="검색: 도시/상품명"
          value={query}
          onChange={e=>setQuery(e.target.value)}
        />
        <select value={category} onChange={e=>setCategory(e.target.value)}>
          {categories.map(c=> <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={sort} onChange={e=>setSort(e.target.value as SortKey)}>
          <option value="popular">인기순</option>
          <option value="priceLow">낮은 가격순</option>
          <option value="priceHigh">높은 가격순</option>
          <option value="rating">평점순</option>
        </select>
      </div>
      <div className="list__grid">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}


