import { ChevronRight, Plus, Settings, Sparkles } from 'lucide-react'

type Thread = { id: string; title: string; time: string }

type Props = {
  open: boolean
  onClose: () => void
  onNavigate: (view: 'home' | 'profile' | 'space') => void
  onPickHistory: (id: string) => void
  plan: 'free' | 'plus'
}

const spaces = [
  { icon: '📚', name: 'Английский A2', count: 12 },
  { icon: '💪', name: 'План тренировок', count: 5 },
]

const today: Thread[] = [
  { id: '1', title: 'Курс доллара и прогноз ЦБ', time: '14:02' },
  { id: '2', title: 'Пробки на МКАД сейчас', time: '11:20' },
]

const yesterday: Thread[] = [
  { id: '3', title: 'Налоговый вычет за лечение', time: 'вчера' },
]

export function SidebarDrawer({
  open,
  onClose,
  onNavigate,
  onPickHistory,
  plan,
}: Props) {
  return (
    <>
      <button
        type="button"
        aria-hidden={!open}
        className={[
          'fixed inset-0 z-[60] bg-black/55 backdrop-blur-[2px] transition-opacity duration-300',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        onClick={onClose}
      />

      <aside
        className={[
          'fixed inset-y-0 left-0 z-[70] flex w-[min(100%,300px)] flex-col bg-bg-elevated shadow-2xl ring-1 ring-white/[0.06] transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : '-translate-x-full',
        ].join(' ')}
        aria-hidden={!open}
      >
        <div className="border-b border-white/[0.06] p-4">
          <button
            type="button"
            onClick={() => {
              onNavigate('profile')
              onClose()
            }}
            className="flex w-full items-center gap-3 rounded-xl p-2 text-left transition hover:bg-white/5"
          >
            <div className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-amber/40 to-amber/10 text-lg font-semibold text-bg">
              А
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[15px] font-medium text-text">
                Анна
              </div>
              <div className="mt-0.5 inline-flex rounded-md bg-bg-card px-2 py-0.5 text-[11px] font-medium text-text-muted ring-1 ring-white/[0.06]">
                {plan === 'plus' ? 'Плюс' : 'Базовый'}
              </div>
            </div>
            <ChevronRight className="size-4 shrink-0 text-text-faint" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-3 py-4">
          <div className="mb-6">
            <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-text-faint">
              Пространства
            </div>
            <ul className="space-y-1">
              {spaces.map((s) => (
                <li key={s.name}>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('space')
                      onClose()
                    }}
                    className="flex w-full items-center gap-2 rounded-xl px-2 py-2.5 text-left transition hover:bg-white/5"
                  >
                    <span className="text-lg">{s.icon}</span>
                    <span className="min-w-0 flex-1 truncate text-[14px] text-text">
                      {s.name}
                    </span>
                    <span className="text-[12px] text-text-faint">{s.count}</span>
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-2 flex w-full items-center gap-2 rounded-xl px-2 py-2.5 text-[14px] font-medium text-amber transition hover:bg-amber/10"
            >
              <Plus className="size-4" strokeWidth={2} />
              Создать пространство
            </button>
          </div>

          <div>
            <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-text-faint">
              История
            </div>
            <div className="mb-1 px-2 text-[11px] text-text-faint">Сегодня</div>
            <ul className="space-y-0.5">
              {today.map((t) => (
                <li key={t.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onPickHistory(t.id)
                      onClose()
                    }}
                    className="flex w-full flex-col gap-0.5 rounded-xl px-2 py-2 text-left transition hover:bg-white/5"
                  >
                    <span className="line-clamp-2 text-[13px] leading-snug text-text">
                      {t.title}
                    </span>
                    <span className="text-[11px] text-text-faint">{t.time}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="mb-1 mt-3 px-2 text-[11px] text-text-faint">
              Вчера
            </div>
            <ul className="space-y-0.5">
              {yesterday.map((t) => (
                <li key={t.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onPickHistory(t.id)
                      onClose()
                    }}
                    className="flex w-full flex-col gap-0.5 rounded-xl px-2 py-2 text-left transition hover:bg-white/5"
                  >
                    <span className="line-clamp-2 text-[13px] text-text">
                      {t.title}
                    </span>
                    <span className="text-[11px] text-text-faint">{t.time}</span>
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-2 px-2 text-[13px] font-medium text-amber/90 hover:underline"
            >
              Показать всё
            </button>
          </div>
        </div>

        <div className="border-t border-white/[0.06] p-3">
          <button
            type="button"
            onClick={() => {
              onNavigate('profile')
              onClose()
            }}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[14px] text-text transition hover:bg-white/5"
          >
            <Settings className="size-5 text-text-muted" strokeWidth={1.75} />
            Настройки
          </button>
          {plan === 'free' && (
            <button
              type="button"
              className="mt-2 flex w-full items-center gap-2 rounded-xl border border-amber/25 bg-amber-dim px-3 py-2.5 text-left text-[13px] text-amber transition hover:bg-amber/15"
            >
              <Sparkles className="size-4 shrink-0" />
              Улучшить до Плюс — от 199 ₽
            </button>
          )}
        </div>
      </aside>
    </>
  )
}
