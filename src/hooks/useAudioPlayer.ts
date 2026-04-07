// src/hooks/useAudioPlayer.ts
import { useCallback, useEffect, useRef, useState } from 'react'
import type { Track } from '../types/music'

const BACKGROUND_VOLUME = 0.3

export interface AudioPlayerControls {
  tracks: Track[]
  currentIndex: number
  isPlaying: boolean
  hasStarted: boolean
  next: () => void
  prev: () => void
  selectTrack: (index: number) => void
  start: () => void
}

export function useAudioPlayer(tracks: Track[]): AudioPlayerControls {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  // Sync hasStarted when music plays
  useEffect(() => {
    if (isPlaying && !hasStarted) {
      setHasStarted(true)
    }
  }, [isPlaying, hasStarted])

  // Create audio element once
  useEffect(() => {
    const audio = new Audio()
    audio.volume = BACKGROUND_VOLUME
    audioRef.current = audio

    const onEnded = () => {
      setCurrentIndex(prev => (prev + 1) % tracks.length)
      setIsPlaying(true)
      setHasStarted(true)
    }

    audio.addEventListener('ended', onEnded)
    return () => {
      audio.removeEventListener('ended', onEnded)
      audio.pause()
    }
  }, [tracks.length])

  // Load new src whenever track changes
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.src = tracks[currentIndex].src
    audio.load()
    if (isPlaying) audio.play().catch(console.error)
  }, [currentIndex, tracks])

  // Sync play/pause state to audio element
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.play().catch(console.error)
    } else {
      audio.pause()
    }
  }, [isPlaying])

  const start = useCallback(() => {
    setIsPlaying(true)
    setHasStarted(true)
  }, [])

  const next = useCallback(() => {
    setCurrentIndex(i => (i + 1) % tracks.length)
    setIsPlaying(true)
    setHasStarted(true)
  }, [tracks.length])

  const prev = useCallback(() => {
    setCurrentIndex(i => (i - 1 + tracks.length) % tracks.length)
    setIsPlaying(true)
    setHasStarted(true)
  }, [tracks.length])

  const selectTrack = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsPlaying(true)
    setHasStarted(true)
  }, [])

  return { tracks, currentIndex, isPlaying, hasStarted, next, prev, selectTrack, start }
}
