import { Menu, SquarePlus } from 'lucide-react'

type Props = {
  onMenu: () => void
  onNewChat: () => void
}

export function FloatingHomeTopBar({ onMenu, onNewChat }: Props) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between px-4 pt-[max(0.75rem,env(safe-area-inset-top))]">
      <button
        type="button"
        onClick={onMenu}
        className="pointer-events-auto grid size-11 place-items-center rounded-2xl text-text transition hover:bg-white/5"
        aria-label="Меню"
      >
        <Menu className="size-6" strokeWidth={2} />
      </button>
      <div className="flex-1" />
      <button
        type="button"
        onClick={onNewChat}
        className="pointer-events-auto grid size-11 place-items-center rounded-2xl text-text transition hover:bg-white/5"
        aria-label="Новый чат"
      >
        <SquarePlus className="size-6" strokeWidth={2} />
      </button>
    </div>
  )
}
