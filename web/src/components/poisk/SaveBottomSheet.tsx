import { ChevronRight, FileText, FolderOpen, StickyNote } from 'lucide-react'

type Props = {
  open: boolean
  onClose: () => void
}

export function SaveBottomSheet({ open, onClose }: Props) {
  return (
    <>
      <button
        type="button"
        className={[
          'fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm transition-opacity',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        onClick={onClose}
        aria-label="Закрыть"
      />
      <div
        className={[
          'fixed inset-x-0 bottom-0 z-[90] rounded-t-3xl border border-white/[0.08] bg-bg-elevated p-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-2xl transition-transform duration-300',
          open ? 'translate-y-0' : 'translate-y-full',
        ].join(' ')}
        role="dialog"
        aria-modal="true"
        aria-labelledby="save-sheet-title"
      >
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/15" />
        <h2 id="save-sheet-title" className="mb-4 text-center text-[16px] font-semibold text-text">
          Сохранить как
        </h2>
        <ul className="space-y-1">
          {[
            { icon: StickyNote, label: 'Заметка' },
            { icon: FileText, label: 'Документ' },
            { icon: FolderOpen, label: 'В пространство' },
          ].map(({ icon: Icon, label }) => (
            <li key={label}>
              <button
                type="button"
                onClick={onClose}
                className="flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-[15px] text-text transition hover:bg-white/5"
              >
                <Icon className="size-5 text-amber" strokeWidth={1.75} />
                <span className="flex-1">{label}</span>
                <ChevronRight className="size-4 text-text-faint" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
