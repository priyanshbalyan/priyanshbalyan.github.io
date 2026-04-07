// src/components/MusicPlayerBar/MarqueeText.tsx
interface MarqueeTextProps {
  text: string
}

export function MarqueeText({ text }: MarqueeTextProps) {
  return (
    <div className="overflow-hidden w-full" aria-label={text}>
      <div className="flex w-max animate-marquee whitespace-nowrap">
        <span className="pr-16 text-xs tracking-widest uppercase">{text}</span>
        <span className="pr-16 text-xs tracking-widest uppercase" aria-hidden="true">{text}</span>
      </div>
    </div>
  )
}
