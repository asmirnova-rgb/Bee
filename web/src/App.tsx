import { useCallback, useEffect, useState } from 'react'
import { SaveBottomSheet } from './components/poisk/SaveBottomSheet'
import { SidebarDrawer } from './components/poisk/SidebarDrawer'
import { HomePoisk } from './screens/HomePoisk'
import { ProfilePoisk } from './screens/ProfilePoisk'
import { ResultsPoisk } from './screens/ResultsPoisk'
import { SpaceInnerPoisk } from './screens/SpaceInnerPoisk'

const ROTATING = [
  'Чем я могу помочь?',
  'Сравни тарифы и подскажи, что выгоднее',
  'Что важно знать о ключевой ставке сегодня',
  'Кратко: главные новости дня',
]

type View = 'home' | 'results' | 'space' | 'profile'

export default function App() {
  const [view, setView] = useState<View>('home')
  const [homeVariant, setHomeVariant] = useState<'returning' | 'new'>('returning')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [saveOpen, setSaveOpen] = useState(false)

  const [homeQuery, setHomeQuery] = useState('')
  const [rotatingIndex, setRotatingIndex] = useState(0)

  const [resultsDisplay, setResultsDisplay] = useState('Курс доллара и ставка ЦБ')
  const [resultsInput, setResultsInput] = useState('Курс доллара и ставка ЦБ')
  const [resultsLoading, setResultsLoading] = useState(false)

  const [spaceTitle, setSpaceTitle] = useState('✈ Поездка в Сочи')
  const [spaceInput, setSpaceInput] = useState('')

  const [plan] = useState<'free' | 'plus'>('free')

  useEffect(() => {
    const t = setInterval(() => {
      setRotatingIndex((n) => (n + 1) % ROTATING.length)
    }, 4000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (view !== 'results' || !resultsLoading) return
    const t = setTimeout(() => setResultsLoading(false), 1100)
    return () => clearTimeout(t)
  }, [view, resultsLoading])

  const openSidebar = useCallback(() => setSidebarOpen(true), [])
  const closeSidebar = useCallback(() => setSidebarOpen(false), [])

  const goHome = useCallback(() => {
    setView('home')
    setHomeQuery('')
  }, [])

  const submitFromHome = useCallback(() => {
    const q = homeQuery.trim()
    if (!q) return
    setResultsDisplay(q)
    setResultsInput(q)
    setResultsLoading(true)
    setView('results')
    setHomeQuery('')
  }, [homeQuery])

  const submitFromResults = useCallback(() => {
    const q = resultsInput.trim()
    if (!q) return
    setResultsDisplay(q)
    setResultsLoading(true)
  }, [resultsInput])

  const openSpace = useCallback((id: string) => {
    const titles: Record<string, string> = {
      s1: '📚 Английский A2',
      s2: '💪 План тренировок',
      s3: '✈ Поездка в Сочи',
    }
    setSpaceTitle(titles[id] ?? 'Пространство')
    setSpaceInput('')
    setView('space')
  }, [])

  const fromHistory = useCallback(() => {
    setResultsDisplay('Курс доллара и прогноз ЦБ')
    setResultsInput('Курс доллара и прогноз ЦБ')
    setResultsLoading(true)
    setView('results')
  }, [])

  return (
    <div className="relative flex h-svh min-h-0 w-full overflow-hidden bg-bg text-text">
      {/* Жест: зона у левого края (веб-аналог swipe) */}
      <button
        type="button"
        aria-label="Открыть меню"
        onClick={openSidebar}
        className="fixed left-0 top-0 z-10 w-4 shrink-0 bg-transparent lg:w-3"
      />

      <SidebarDrawer
        open={sidebarOpen}
        onClose={closeSidebar}
        plan={plan}
        onNavigate={(v) => {
          if (v === 'home') goHome()
          if (v === 'profile') setView('profile')
          if (v === 'space') openSpace('s3')
        }}
        onPickHistory={() => fromHistory()}
      />

      <SaveBottomSheet open={saveOpen} onClose={() => setSaveOpen(false)} />

      <div className="relative z-0 flex min-h-0 min-w-0 flex-1 flex-col">
        {view === 'home' && (
          <HomePoisk
            variant={homeVariant}
            onVariantChange={setHomeVariant}
            query={homeQuery}
            onQueryChange={setHomeQuery}
            onSubmit={submitFromHome}
            onMenu={openSidebar}
            onNewChat={goHome}
            onOpenSpace={openSpace}
            rotatingPlaceholder={ROTATING[rotatingIndex] ?? ROTATING[0]!}
            rotatingKey={rotatingIndex}
          />
        )}

        {view === 'results' && (
          <ResultsPoisk
            queryDisplay={resultsDisplay}
            onQueryDisplayChange={setResultsDisplay}
            inputValue={resultsInput}
            onInputChange={setResultsInput}
            onSubmit={submitFromResults}
            onBack={goHome}
            onSave={() => setSaveOpen(true)}
            loading={resultsLoading}
          />
        )}

        {view === 'space' && (
          <SpaceInnerPoisk
            title={spaceTitle}
            inputValue={spaceInput}
            onInputChange={setSpaceInput}
            onSubmit={() => {}}
            onBack={goHome}
          />
        )}

        {view === 'profile' && (
          <ProfilePoisk
            onBack={() => {
              setView('home')
            }}
          />
        )}
      </div>
    </div>
  )
}
