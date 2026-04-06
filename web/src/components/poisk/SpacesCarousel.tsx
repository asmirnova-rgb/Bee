import { spacesMock } from '../../data/poiskMock'

type Props = {
  onOpenSpace: (id: string) => void
}

export function SpacesCarousel({ onOpenSpace }: Props) {
  return (
    <div className="w-full px-4">
      <div className="scroll-x-hide -mx-1 flex gap-3 overflow-x-auto pb-1 pt-1 snap-x snap-mandatory">
        {spacesMock.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onOpenSpace(s.id)}
            className="snap-start shrink-0 w-[min(78vw,260px)] rounded-2xl border border-white/[0.08] bg-bg-card p-4 text-left shadow-lg ring-1 ring-white/[0.04] transition hover:border-amber/25 hover:ring-amber/10"
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <span className="text-2xl" aria-hidden>
                {s.icon}
              </span>
              {s.active && (
                <span
                  className="mt-1.5 size-2 rounded-full bg-amber shadow-[0_0_12px_rgba(245,197,66,0.6)]"
                  title="Текущее"
                />
              )}
            </div>
            <div className="text-[15px] font-semibold leading-snug text-text">
              {s.title}
            </div>
            <div className="mt-1 line-clamp-2 text-[12px] leading-relaxed text-text-muted">
              {s.subtitle}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
