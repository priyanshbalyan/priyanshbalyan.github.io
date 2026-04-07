import { createContext, useContext, useEffect, type ReactNode } from 'react'
import { useAudioPlayer, type AudioPlayerControls } from '../hooks/useAudioPlayer'
import { TRACKS } from '../data/tracks'

const PlayerContext = createContext<AudioPlayerControls | null>(null)

export function PlayerProvider({ children }: { children: ReactNode }) {
  const player = useAudioPlayer(TRACKS)

  useEffect(() => {
    const handleFirstClick = () => {
      if (!player.hasStarted) {
        player.start()
      }
    }
    window.addEventListener('click', handleFirstClick, { once: true })
    return () => window.removeEventListener('click', handleFirstClick)
  }, [player])

  return <PlayerContext.Provider value={player}>{children}</PlayerContext.Provider>
}

export function usePlayer(): AudioPlayerControls {
  const ctx = useContext(PlayerContext)
  if (!ctx) throw new Error('usePlayer must be used inside <PlayerProvider>')
  return ctx
}
