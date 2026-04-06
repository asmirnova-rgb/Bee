import {
  ArrowLeft,
  Bookmark,
  ExternalLink,
  ThumbsDown,
  ThumbsUp,
} from 'lucide-react'
import { answerWithCitations, followUpCards, sourcesPills } from '../data/poiskMock'
import { BottomInput } from '../components/poisk/BottomInput'

type Props = {
  queryDisplay: string
  onQueryDisplayChange: (v: string) => void
  inputValue: string
  onInputChange: (v: string) => void
  onSubmit: () => void
  onBack: () => void
  onSave: () => void
  loading?: boolean
}

function AnswerBody() {
  const parts = answerWithCitations.split(/(\[\d+\])/g)
  return (
    <div className="answer-prose">
      <p>
        {parts.map((part, i) => {
          const m = part.match(/^\[(\d+)\]$/)
          if (m) {
            return (
              <sup key={i} className="cite">
                {m[1]}
              </sup>
            )
          }
          return <span key={i}>{part}</span>
        })}
      </p>
    </div>
  )
}

export function ResultsPoisk({
  queryDisplay,
  onQueryDisplayChange,
  inputValue,
  onInputChange,
  onSubmit,
  onBack,
  onSave,
  loading = false,
}: Props) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <header className="flex shrink-0 items-center gap-2 border-b border-white/[0.06] px-3 py-3 pt-[max(0.5rem,env(safe-area-inset-top))]">
        <button
          type="button"
          onClick={onBack}
          className="grid size-10 place-items-center rounded-xl text-text transition hover:bg-white/5"
          aria-label="Назад"
        >
          <ArrowLeft className="size-5" strokeWidth={2} />
        </button>
        <input
          value={queryDisplay}
          onChange={(e) => onQueryDisplayChange(e.target.value)}
          className="min-w-0 flex-1 bg-transparent text-center text-[15px] font-medium text-text placeholder:text-text-faint focus:outline-none"
          aria-label="Запрос"
        />
        <div className="size-10 shrink-0" aria-hidden />
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
        {loading && <div className="loading-bar mb-6" />}

        <div className="scroll-x-hide -mx-1 mb-6 flex gap-2 overflow-x-auto pb-1">
          {sourcesPills.map((s) => (
            <button
              key={s.more ? 'more' : s.n}
              type="button"
              className="flex shrink-0 items-center gap-2 rounded-full border border-white/[0.08] bg-bg-card px-3 py-2 text-[13px] text-text ring-1 ring-white/[0.04] transition hover:border-amber/30"
            >
              <span className="grid min-w-[1.5rem] place-items-center rounded-md bg-amber/20 px-1 text-[11px] font-bold text-amber">
                {s.more ? s.name : s.n}
              </span>
              {!s.more && (
                <span className="text-text-muted">{s.name}</span>
              )}
            </button>
          ))}
        </div>

        <article className="mb-8">
          <AnswerBody />
        </article>

        <div className="mb-6">
          <p className="mb-3 text-[12px] font-medium uppercase tracking-wide text-text-faint">
            Уточнить запрос
          </p>
          <ul className="space-2">
            {followUpCards.map((text) => (
              <li key={text}>
                <button
                  type="button"
                  onClick={() => onInputChange(text)}
                  className="flex w-full items-center justify-between gap-3 rounded-2xl border border-white/[0.06] bg-bg-card px-4 py-3.5 text-left text-[14px] text-text transition hover:border-white/10"
                >
                  <span>{text}</span>
                  <span className="text-text-faint">›</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-3 border-t border-white/[0.06] pt-4">
          <div className="flex gap-1">
            <button
              type="button"
              className="rounded-xl p-2 text-text-muted hover:bg-white/5 hover:text-text"
              aria-label="Хорошо"
            >
              <ThumbsUp className="size-5" />
            </button>
            <button
              type="button"
              className="rounded-xl p-2 text-text-muted hover:bg-white/5 hover:text-text"
              aria-label="Плохо"
            >
              <ThumbsDown className="size-5" />
            </button>
          </div>
          <span className="text-text-faint">|</span>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-amber"
          >
            Искать в вебе
            <ExternalLink className="size-4" />
          </button>
          <span className="text-text-faint">|</span>
          <button
            type="button"
            onClick={onSave}
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-text"
          >
            <Bookmark className="size-4" />
            Сохранить
          </button>
        </div>

        <p className="text-[11px] leading-relaxed text-text-faint">
          Ответ сгенерирован нейросетью на основе открытых источников. Может содержать
          неточности. Проверяйте критичные данные.
        </p>
      </div>

      <BottomInput
        value={inputValue}
        onChange={onInputChange}
        onSubmit={onSubmit}
        placeholder="Уточните вопрос или задайте следующий"
        showOverlay={false}
      />
    </div>
  )
}
