import { ArrowLeft, Bell, ChevronRight, Shield } from 'lucide-react'

type Props = {
  onBack: () => void
}

export function ProfilePoisk({ onBack }: Props) {
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-bg">
      <header className="flex shrink-0 items-center gap-3 border-b border-white/[0.06] px-3 py-3 pt-[max(0.5rem,env(safe-area-inset-top))]">
        <button
          type="button"
          onClick={onBack}
          className="grid size-10 place-items-center rounded-xl text-text hover:bg-white/5"
          aria-label="Назад"
        >
          <ArrowLeft className="size-5" strokeWidth={2} />
        </button>
        <h1 className="text-[17px] font-semibold text-text">Профиль</h1>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6">
        <div className="mb-6 rounded-2xl border border-white/[0.08] bg-bg-card p-4 ring-1 ring-white/[0.04]">
          <div className="flex items-center gap-3">
            <div className="grid size-14 place-items-center rounded-full bg-gradient-to-br from-amber to-amber/60 text-xl font-bold text-bg">
              А
            </div>
            <div>
              <div className="text-[17px] font-semibold text-text">Анна Смирнова</div>
              <div className="text-[13px] text-text-muted">+7 ••• ••• 42 18</div>
              <div className="mt-2 inline-flex rounded-md bg-bg-elevated px-2 py-0.5 text-[12px] font-medium text-amber ring-1 ring-amber/25">
                Базовый
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-[13px] text-text-muted">
            <span>Pro-запросы сегодня</span>
            <span className="font-medium text-text">3 / 5</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-bg-card ring-1 ring-white/[0.06]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber/80 to-amber transition-all"
              style={{ width: '60%' }}
            />
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-amber/35 bg-amber-dim p-4 ring-1 ring-amber/20">
          <div className="text-[18px] font-semibold text-text">Плюс — 199 ₽/мес</div>
          <ul className="mt-3 space-y-1.5 text-[14px] text-text-muted">
            <li>Безлимитные запросы</li>
            <li>90 дней истории</li>
            <li>Приоритетная скорость</li>
          </ul>
          <button
            type="button"
            className="mt-4 w-full rounded-xl bg-amber py-3.5 text-[15px] font-semibold text-bg shadow-[0_0_32px_rgba(245,197,66,0.25)] transition hover:brightness-110"
          >
            Подключить через оператора
          </button>
          <p className="mt-2 text-center text-[11px] text-text-faint">
            Списание с баланса телефона
          </p>
        </div>

        <ul className="divide-y divide-white/[0.06] overflow-hidden rounded-2xl border border-white/[0.06] bg-bg-card">
          {[
            { icon: Bell, label: 'Уведомления' },
            { icon: Shield, label: 'Конфиденциальность' },
          ].map(({ icon: Icon, label }) => (
            <li key={label}>
              <button
                type="button"
                className="flex w-full items-center gap-3 px-4 py-3.5 text-left text-[15px] text-text transition hover:bg-white/[0.03]"
              >
                <Icon className="size-5 text-text-muted" strokeWidth={1.75} />
                <span className="flex-1">{label}</span>
                <ChevronRight className="size-4 text-text-faint" />
              </button>
            </li>
          ))}
          <li className="flex items-center justify-between gap-3 px-4 py-3.5">
            <span className="text-[15px] text-text">Тема</span>
            <span className="text-[13px] text-text-muted">Тёмная</span>
          </li>
          <li className="flex items-center justify-between gap-3 px-4 py-3.5">
            <span className="text-[15px] text-text">Инкогнито-режим</span>
            <button
              type="button"
              role="switch"
              aria-checked="false"
              className="relative h-7 w-12 rounded-full bg-bg-elevated ring-1 ring-white/10"
            >
              <span className="absolute left-1 top-1 size-5 rounded-full bg-text-muted transition" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
