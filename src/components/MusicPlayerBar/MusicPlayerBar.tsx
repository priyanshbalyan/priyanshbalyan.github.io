// src/components/MusicPlayerBar/MusicPlayerBar.tsx
import { usePlayer } from '../../context/PlayerContext'
import { MarqueeText } from './MarqueeText'

function PrevIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 6h2v12H6V6zm3.5 6 8.5 6V6l-8.5 6z" />
    </svg>
  )
}

function NextIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
    </svg>
  )
}

export function MusicPlayerBar() {
  const { tracks, currentIndex, next, prev } = usePlayer()
  const track = tracks[currentIndex]
  const label = `${track.artist} — ${track.title}`

  return (
    <div className="w-48 absolute top-0 right-0">
    <div className="flex items-center gap-3 px-4 py-2 backdrop-blur-sm border-b border-white/10">
      <button
        onClick={prev}
        aria-label="Previous track"
        className="shrink-0 text-white/50 hover:text-white transition-colors cursor-pointer"
      >
        <PrevIcon />
      </button>

      <div className="flex-1 min-w-0 text-white/70">
        <MarqueeText text={label} />
      </div>

      <button
        onClick={next}
        aria-label="Next track"
        className="shrink-0 text-white/50 hover:text-white transition-colors cursor-pointer"
      >
        <NextIcon />
      </button>
    </div>
    </div>
  )
}
