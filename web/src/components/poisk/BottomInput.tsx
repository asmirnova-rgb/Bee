import { ChevronDown, Mic, Plus } from 'lucide-react'
import { useEffect, useRef } from 'react'

type Props = {
  value: string
  onChange: (v: string) => void
  onSubmit: () => void
  placeholder?: string
  /** For animated overlay placeholder on home */
  overlayPlaceholder?: string
  overlayKey?: number
  showOverlay?: boolean
}

export function BottomInput({
  value,
  onChange,
  onSubmit,
  placeholder = 'Чем я могу помочь?',
  overlayPlaceholder,
  overlayKey = 0,
  showOverlay = false,
}: Props) {
  const ta = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const el = ta.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`
  }, [value])

  const showPh = showOverlay && !value.trim()

  return (
    <div className="border-t border-white/[0.06] bg-bg/90 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-[min(100%,540px)] px-4">
        <div className="input-glow rounded-[22px] bg-bg-input transition-all duration-300">
          <div className="relative flex items-end gap-2 px-3 py-2.5 sm:px-4">
            <div className="flex shrink-0 items-center gap-1 pb-1">
              <button
                type="button"
                className="grid size-10 place-items-center rounded-xl text-text-muted transition hover:bg-white/5 hover:text-text"
                aria-label="Вложения"
              >
                <Plus className="size-5" strokeWidth={2} />
              </button>
              <button
                type="button"
                className="flex items-center gap-0.5 rounded-xl bg-bg-card px-2.5 py-2 text-[12px] font-medium text-text ring-1 ring-white/[0.08] transition hover:ring-amber/30"
              >
                Авто
                <ChevronDown className="size-3.5 opacity-70" />
              </button>
            </div>

            <div className="relative min-h-[44px] min-w-0 flex-1 py-1">
              {showPh && overlayPlaceholder && (
                <div
                  key={overlayKey}
                  className="placeholder-rotate pointer-events-none absolute left-0 right-0 top-1 text-[15px] text-text-faint"
                >
                  {overlayPlaceholder}
                </div>
              )}
              <textarea
                ref={ta}
                rows={1}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    onSubmit()
                  }
                }}
                placeholder={showPh ? ' ' : placeholder}
                className="max-h-[120px] min-h-[44px] w-full resize-none bg-transparent text-[15px] leading-relaxed text-text placeholder:text-text-faint focus:outline-none"
                aria-label="Запрос"
              />
            </div>

            <div className="flex shrink-0 items-center gap-1.5 pb-1">
              <div
                className="hidden text-amber/80 sm:grid sm:place-items-center"
                aria-hidden
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="opacity-80"
                >
                  <path
                    d="M4 12h2l1.5-6L10 18l2-12 2 8 1.5-6H20"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <button
                type="button"
                className="grid size-11 shrink-0 place-items-center rounded-full bg-amber text-bg shadow-[0_0_24px_rgba(245,197,66,0.35)] transition hover:brightness-110 active:scale-95"
                aria-label="Голосовой ввод"
              >
                <Mic className="size-5" strokeWidth={2.25} />
              </button>
            </div>
          </div>
        </div>
        <p className="mt-2 text-center text-[11px] text-text-faint">
          Подберу лучшую модель под ваш запрос
        </p>
      </div>
      {/* Home indicator — iOS-style */}
      <div className="mx-auto mt-3 h-1 w-[28%] max-w-[120px] rounded-full bg-white/10" />
    </div>
  )
}
