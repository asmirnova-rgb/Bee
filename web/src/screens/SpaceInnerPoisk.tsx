import { ArrowLeft, MoreHorizontal, Search } from 'lucide-react'
import { spaceDocuments, spaceQueries } from '../data/poiskMock'
import { BottomInput } from '../components/poisk/BottomInput'

type Props = {
  title: string
  inputValue: string
  onInputChange: (v: string) => void
  onSubmit: () => void
  onBack: () => void
}

export function SpaceInnerPoisk({
  title,
  inputValue,
  onInputChange,
  onSubmit,
  onBack,
}: Props) {
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-bg">
      <header className="flex shrink-0 items-center gap-2 border-b border-white/[0.06] px-2 py-3 pt-[max(0.5rem,env(safe-area-inset-top))]">
        <button
          type="button"
          onClick={onBack}
          className="grid size-10 place-items-center rounded-xl text-text hover:bg-white/5"
          aria-label="Назад"
        >
          <ArrowLeft className="size-5" strokeWidth={2} />
        </button>
        <h1 className="min-w-0 flex-1 truncate text-center text-[16px] font-semibold text-text">
          {title}
        </h1>
        <button
          type="button"
          className="grid size-10 place-items-center rounded-xl text-text hover:bg-white/5"
          aria-label="Ещё"
        >
          <MoreHorizontal className="size-5" strokeWidth={2} />
        </button>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
        <div className="relative mb-6">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-faint" />
          <input
            type="search"
            placeholder="Искать внутри пространства"
            className="w-full rounded-2xl border border-white/[0.08] bg-bg-card py-3 pl-10 pr-4 text-[14px] text-text placeholder:text-text-faint focus:border-amber/30 focus:outline-none focus:ring-1 focus:ring-amber/25"
          />
        </div>

        <section className="mb-8">
          <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-text-faint">
            Документы
          </h2>
          <ul className="space-2">
            {spaceDocuments.map((d) => (
              <li
                key={d.title}
                className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-bg-card px-4 py-3"
              >
                <span className="text-xl">{d.type === 'pdf' ? '📄' : '📝'}</span>
                <span className="text-[14px] text-text">{d.title}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-text-faint">
            Запросы
          </h2>
          <ul className="space-3">
            {spaceQueries.map((q) => (
              <li
                key={q.title}
                className="rounded-2xl border border-white/[0.06] bg-bg-elevated p-4"
              >
                <div className="text-[15px] font-medium text-text">{q.title}</div>
                <p className="mt-1 line-clamp-2 text-[13px] text-text-muted">
                  {q.preview}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {q.pills.map((p) => (
                    <span
                      key={p}
                      className="rounded-md bg-bg-card px-2 py-0.5 text-[11px] text-text-muted ring-1 ring-white/[0.06]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <BottomInput
        value={inputValue}
        onChange={onInputChange}
        onSubmit={onSubmit}
        placeholder="Спросите о материалах пространства"
        showOverlay={false}
      />
    </div>
  )
}
