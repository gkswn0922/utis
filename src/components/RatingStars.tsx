type Props = { value: number }

export function RatingStars({ value }: Props) {
  const clamped = Math.max(0, Math.min(5, value))
  const full = Math.floor(clamped)
  const half = clamped - full >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  return (
    <span aria-label={`평점 ${value.toFixed(1)} / 5`}>
      {'★'.repeat(full)}{half ? '☆' : ''}{'✩'.repeat(empty)}
    </span>
  )
}


