import { suggestionChipsNewUser } from '../data/poiskMock'
import { BottomInput } from '../components/poisk/BottomInput'
import { FloatingHomeTopBar } from '../components/poisk/FloatingHomeTopBar'
import { SpacesCarousel } from '../components/poisk/SpacesCarousel'

type Props = {
  variant: 'returning' | 'new'
  onVariantChange: (v: 'returning' | 'new') => void
  query: string
  onQueryChange: (v: string) => void
  onSubmit: () => void
  onMenu: () => void
  onNewChat: () => void
  onOpenSpace: (id: string) => void
  rotatingPlaceholder: string
  rotatingKey: number
}

export function HomePoisk({
  variant,
  onVariantChange,
  query,
  onQueryChange,
  onSubmit,
  onMenu,
  onNewChat,
  onOpenSpace,
  rotatingPlaceholder,
  rotatingKey,
}: Props) {
  return (
    <div className="relative flex min-h-0 flex-1 flex-col ambient-glow">
      <FloatingHomeTopBar onMenu={onMenu} onNewChat={onNewChat} />

      <div className="pointer-events-auto absolute right-4 top-[max(4.25rem,env(safe-area-inset-top)+3.5rem)] z-30 flex max-w-[calc(100%-2rem)] flex-col items-end gap-1">
        <span className="text-[10px] uppercase tracking-wider text-white/25">
          Демо-сценарий
        </span>
        <div className="flex rounded-full border border-white/[0.08] bg-bg-card/90 p-0.5 text-[11px] shadow-lg backdrop-blur-md">
          <button
            type="button"
            onClick={() => onVariantChange('returning')}
            className={`rounded-full px-2.5 py-1.5 sm:px-3 ${variant === 'returning' ? 'bg-white/10 text-amber' : 'text-text-muted'}`}
          >
            Постоянный
          </button>
          <button
            type="button"
            onClick={() => onVariantChange('new')}
            className={`rounded-full px-2.5 py-1.5 sm:px-3 ${variant === 'new' ? 'bg-white/10 text-amber' : 'text-text-muted'}`}
          >
            Новый
          </button>
        </div>
      </div>

      <main className="flex min-h-0 flex-1 flex-col px-4 pb-2 pt-[4.5rem]">
        <div className="pointer-events-none flex flex-1 flex-col items-center justify-center">
          <h1 className="select-none text-center text-[clamp(2.5rem,12vw,4rem)] font-semibold tracking-tight text-white/[0.06]">
            ПоискAI
          </h1>

          {variant === 'new' ? (
            <div className="pointer-events-auto mt-8 w-full max-w-md">
              <p className="mb-4 text-center text-[13px] text-text-muted">
                3 запроса без регистрации
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {suggestionChipsNewUser.map((label) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => onQueryChange(label)}
                    className="rounded-full border border-white/[0.08] bg-bg-card px-4 py-2.5 text-[14px] text-text shadow-lg ring-1 ring-white/[0.04] transition hover:border-amber/35 hover:shadow-amber/5"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="pointer-events-auto mt-10 w-full max-w-lg">
              <SpacesCarousel onOpenSpace={onOpenSpace} />
            </div>
          )}
        </div>
      </main>

      <BottomInput
        value={query}
        onChange={onQueryChange}
        onSubmit={onSubmit}
        overlayPlaceholder={rotatingPlaceholder}
        overlayKey={rotatingKey}
        showOverlay
      />
    </div>
  )
}
