# Research: Инпут — поле ввода, состояния, саджесты

**Продукт:** Perplexity-like AI-поиск | **Фича:** Input (поле ввода + состояния + саджесты)
**Волна:** 1 (core loop) | **Версия:** 1.0 | **Дата:** март 2026

***

## 1. Боли и потребности

### Jobs to be done

Инпут — это не просто текстовое поле. Это первое взаимодействие, которое определяет весь опыт. Пользователь нанимает инпут для выполнения трёх задач одновременно: **сформулировать мысль → сигнализировать системе что он хочет → получить первый сигнал что система его поняла**.

**Ключевые боли:**

- **Query crafting pressure** — пользователи не знают, как правильно формулировать запрос для AI-продукта. В отличие от Google, где выработан 20-летний мышечный навык "ключевых слов", в разговорном поиске правила нефиксированы.[^1]
- **Anxiety пустого экрана** — blank input вызывает ощущение что система сломана или что "не знаю с чего начать". Это один из главных барьеров для новых пользователей.[^2]
- **Контекст теряется с каждым новым поиском** — в Google каждый запрос начинается с нуля. Пользователи хотят, чтобы система помнила предыдущий контекст.[^1]
- **Неясность режима** — разница между "поиском" и "вопросом к AI" не очевидна для неподготовленного пользователя. Если интерфейс это не проясняет, возникает когнитивный диссонанс.[^3][^4]
- **Когнитивная перегрузка от саджестов** — слишком много подсказок парализует, слишком мало — не помогает. Оптимальное количество по Hick's Law — 4–5 вариантов.[^5]
- **Пользователи не умеют задавать уточняющие вопросы** — по аналогии с тем, как мало кто задаёт вопросы после большого выступления. Показывать follow-up саджесты необходимо, а не предоставлять это инициативе пользователя.[^6]

### Барьеры входа

- Непонимание чем этот инпут отличается от поисковика → решается через placeholder и примеры
- Страх "спросить глупость" → решается friendly tone и conversational UX
- Привычка Google-speak (короткие ключевые слова) → нужно явно показать, что вопросы в полной форме работают лучше

### Триггеры возврата

- Получение точного ответа с первой попытки → "магический момент" продукта
- Follow-up chips, которые ведут глубже — удерживают в диалоге[^7]
- Персональные саджесты, основанные на истории запросов

***

## 2. Метрики

### Что показывает что фича работает

| Метрика | Что измеряет | Цель |
|---|---|---|
| Time to first submit | Время от открытия страницы до первого запроса | < 30 сек |
| CTR на suggested prompts | % кликов на саджест vs. самостоятельный ввод | > 20% новых пользователей |
| Query completion rate | % сессий где запрос был отправлен после фокуса | > 85% |
| First query → return visit | Пользователь вернулся после первого запроса | Коррелирует с retention |

### Активация

Retention коррелирует с тем, что пользователь выполнил **не менее 3 запросов в первый визит** — это ключевой activation moment, аналогичный "добавить 3 инструмента на дашборд" у продуктов-аналогов. Задача инпута — максимально снизить трение до третьего запроса.[^8]

### Антиметрики

- **Input abandonment rate** — пользователь открыл поле (фокус), ничего не отправил. Сигнал о стрессе или непонимании.
- **Query reformulation rate** — пользователь отправил новый запрос сразу после предыдущего. Сигнал что ответ не попал в ожидание.[^1]
- **Bounced first session** — пришёл, ничего не спросил, ушёл.

***

## 3. Конкуренты — как решили

### Прямые конкуренты

| Конкурент | Placeholder | Саджесты | Голос | Clarify? | Особенности |
|---|---|---|---|---|---|
| **Perplexity** | Rotating примеры запросов | 4–5 real-time при вводе | Есть (мобайл) | Да, если запрос широкий | Stop Generating, автофокус[^6][^5] |
| **Яндекс Нейро** | Стандартный поиск Яндекс | Из общего поискового саджеста | Через Алису | Нет | Знакомый паттерн, прозрачность источников[^9] |
| **GigaChat** | "Спросите меня о чём угодно" | Готовые сценарии кнопками | Голос prominent | Нет | Ориентирован на мобайл, СберБанк аудитория |
| **ChatGPT Search** | "Ask anything" | Trending/suggested topics | Есть | Иногда | Акцент на моделях, не на поиске |
| **You.com** | Варьируется | Suggested search modes | Нет | Нет | Разделение: Chat / Search / Create |

### Косвенные — UX-паттерны

**Spotify** (лучший в классе по "найди что-то новое"): не показывает пустой инпут — сразу предлагает плейлисты и "Your Daily Mix". Принцип: **no blank canvas** — всегда есть что-то готовое для начала взаимодействия.

**Slack** (онбординг): превратил пустое состояние в точку входа с личностью бренда и готовыми шаблонами. Результат — снижение drop-off при первом использовании.[^10]

**Google Photos**: динамический placeholder, подсказывающий что можно искать на основе имеющегося контента пользователя ("People, places, things").[^11]

***

## 4. Критерии хорошего решения

### Измеримые

- Пользователь отправляет первый запрос < 30 секунд после открытия страницы
- ≥ 20% новых пользователей используют саджест (а не пишут с нуля)
- Input abandonment rate < 15%
- Query reformulation в первый визит < 25%

### Субъективные

- Ощущение **"эта штука меня понимает"** с первой попытки
- Placeholder создаёт ожидание умного ответа, а не поиска по ключевым словам
- Поле выглядит "разговорным", а не "поисковым"
- Скорость ответной реакции на ввод воспринимается мгновенной

***

## 5. Что копируем и почему

### Perplexity: rotating placeholder с примерами

**Что:** Placeholder анимировано сменяет примеры запросов — "Как работает квантовый компьютер?", "Что купить вместо MacBook?", "Объясни инфляцию просто".

**Почему работает:** Снижает anxiety пустого поля + обучает пользователя правильному формату запроса без туториала. Пользователь видит — можно спрашивать на естественном языке.[^6][^2]

**Перенесётся без изменений:** Да, если примеры локализованы под российские реалии (не "best restaurants in SF", а "куда сходить поесть в Москве").

### Perplexity: follow-up chips

**Что:** 3–4 тэпабельных подсказки внизу ответа ("Расскажи подробнее о...", "Сравни с...", "Что это значит для...").[^5]

**Почему работает:** Устраняет барьер "что спросить дальше". Удерживает в диалоге, приближает к третьему запросу (activation metric). Применяется Hick's Law — небольшое число вариантов, быстрое решение.[^6][^5]

### Perplexity: уточняющий вопрос при широком запросе

**Что:** Если запрос слишком широкий ("расскажи про AI"), система задаёт уточняющий вопрос — "Вас интересует применение в бизнесе, обучении или технологиях?".[^6]

**Почему работает:** Снижает вероятность разочаровывающего ответа. Пользователь чувствует что система "думает", а не просто выдаёт ответ. Снижает query reformulation rate.

### Автофокус на инпут

**Что:** При открытии страницы курсор автоматически в поле ввода.[^12]

**Почему работает:** Очевидно, но часто не реализовано. Устраняет лишний клик = снижает time to first submit. Работает и в новом чате, и при возврате в историю.

### Real-time саджесты с выделением предсказанной части

**Что:** При вводе показывать 4–5 саджестов. Введённая часть — обычный шрифт, предсказанная часть — **жирная**.[^13]

**Почему работает:** По данным Baymard Institute — пользователи глазами ищут "что добавляется", а не "что уже написано". Tap-ahead (стрелочка добавляет к запросу без submit) позволяет итерировать запрос.[^14][^13]

***

## 6. Что делаем иначе и почему

### Контекстуализированный placeholder для российской аудитории

Не просто перевести примеры Perplexity, а использовать **реально релевантные российские сценарии**: "Сравни тарифы МТС и Билайн", "Что посмотреть этим вечером", "Как оформить налоговый вычет". Это немедленно создаёт ощущение что продукт "для меня".

### Голосовой ввод как первоклассный элемент

В российском рынке голосовые запросы — устойчивый паттерн через Алису и Яндекс. 63% российских пользователей применяют нейросети для поиска информации. Иконка микрофона должна быть **внутри поля ввода** (не рядом, не спрятана), одинаково доступная в мобайле и десктопе.[^15]

### Режим инпута: "Спроси" vs "Поищи" без переключателя

Вместо явного toggle (который протестирован и оказался неинтуитивным), использовать **интеллектуальный placeholder и контекстные иконки**:[^3]
- Если пользователь формулирует вопрос (есть "?", слова "что/как/почему") — иконка меняется на "conversational" режим
- Если вводит ключевые слова — остаётся нейтральной

Это решает проблему without cognitive overhead.

### Телеком-персонализация саджестов

Уникальная возможность на основе данных оператора: если известен тариф пользователя — саджестировать релевантные вопросы ("Как проверить остаток трафика?", "Выгодно ли мне менять тариф?"). Это невозможно у Perplexity и создаёт дифференциацию.

***

## 7. Что не делаем

### Не делаем toggle Search / Ask mode

Протестировано — неинтуитивно. Пользователь не хочет выбирать режим до запроса. Система должна понять намерение сама по формулировке.[^3]

### Не ограничиваем символы жёстко

256 символов — частая ошибка у AI-продуктов. Она блокирует сложные профессиональные запросы. Ограничение должно быть мягким (счётчик) или отсутствовать для зарегистрированных пользователей.[^16]

### Не показываем spinner при загрузке ответа

Полный spinner воспринимается как медленная система. Нужна **streaming-индикация**: текст появляется посимвольно или блоками — пользователь видит прогресс и начинает читать сразу.[^17][^18]

### Не делаем generic placeholder

"Введите запрос..." или "Задайте вопрос..." — неинформативны. Они не обучают формату, не показывают возможности, не снижают anxiety.[^19]

### Не показываем > 5–6 саджестов одновременно

Больше вариантов = дольше принятие решения (Hick's Law). Лучше 4 качественных варианта, чем 10 средних.[^5]

### Не скрываем что система делает ("black box")

Если система уточняет запрос или ищет источники — показываем это пользователю. Прозрачность = доверие. Даже простое "ищу источники..." снижает воспринимаемое время ожидания.[^18][^20]

***

## 8. Рекомендации

### R1 — Rotating placeholder с локализованными примерами

**Сделать так:** Placeholder анимировано показывает 5–7 примеров запросов, меняющихся каждые 3 секунды. Примеры охватывают ключевые сценарии: фактчек, сравнение, объяснение, рабочая задача. Все примеры — на русском, в российском контексте.

*Почему:* Снижает anxiety + неявно обучает формату. Обходится без туториала.

### R2 — Автофокус всегда

**Сделать так:** Автофокус на поле при: открытии главной страницы, создании нового чата, возврате в чат. Без исключений.

*Почему:* Устраняет лишний клик, снижает Time to first submit.[^12]

### R3 — 4 real-time саджеста при вводе с выделением предсказания

**Сделать так:** С первого символа — саджесты из истории пользователя + трендовых запросов. Предсказанная часть жирная. Tap-ahead стрелочка для расширения без submit.

*Почему:* Ускоряет ввод, снижает ошибки формулировки.[^14][^13]

### R4 — Clarifying question для широких запросов

**Сделать так:** Если запрос < 3 слов или относится к очень широкой теме — до генерации ответа показать 2–3 уточняющих варианта в виде кнопок. Пример: "Вы имеете в виду: [A] / [B] / [C]? Или продолжить с текущим запросом →".

*Почему:* Снижает query reformulation rate, повышает удовлетворённость первым ответом.[^6]

### R5 — Follow-up chips после каждого ответа

**Сделать так:** 3 чипа снизу ответа. Один — "zoom in" (углубиться в тему), один — "pivot" (смежная тема), один — "simplify" (упростить). Якорить в конкретных фактах ответа, не generic.[^7]

*Почему:* Удерживает в диалоге, приближает к 3-му запросу (activation).[^8]

### R6 — Streaming вместо spinner

**Сделать так:** Как только начинается генерация — текст начинает появляться посимвольно. Параллельно — индикация "ищу источники" (без спиннера). Кнопка Stop Generating всегда доступна.

*Почему:* Воспринимаемая скорость ответа критически важна. Streaming снижает anxiety ожидания.[^18]

### R7 — Голосовой ввод внутри поля

**Сделать так:** Иконка микрофона — правый край поля ввода. На мобайле — заметная, с тапабельной зоной ≥ 44pt. Активация — тап, не удержание.

*Почему:* Российские пользователи привыкли к голосовому вводу через Алису. Прятать его — значит игнорировать устоявшийся паттерн.[^15]

### R8 — Состояние ошибки с конкретным текстом

**Сделать так:** Вместо "Что-то пошло не так" → "Не удалось получить ответ — попробуйте переформулировать вопрос" + кнопка "Повторить". Если проблема с сетью — честно: "Нет соединения".

*Почему:* Конкретные сообщения об ошибках снижают фрустрацию и не оставляют пользователя в тупике.[^21]

***

## 9. Открытые вопросы

### Для проверки с пользователями

- [ ] Как пользователи интерпретируют placeholder — как инструкцию или как пример? Тестировать через UX-тест: попросить "начни пользоваться продуктом" без объяснений.
- [ ] Clarifying question: раздражает или помогает? Есть риск воспринимаемого "торможения" перед ответом.
- [ ] Какой процент пользователей в первый визит кликает на саджест vs. пишет сам? Это поможет откалибровать кол-во и тип саджестов.
- [ ] Голосовой ввод: мобайл-only или нужен на десктопе тоже?

### Для уточнения с командой

- [ ] Есть ли доступ к телеком-данным для персонализации саджестов? Это ключевое преимущество — или пока недоступно?
- [ ] Какие категории запросов ожидаются в первую волну? Это определяет примеры в placeholder.
- [ ] Технические ограничения на длину запроса в текущем бэкенде?
- [ ] Streaming поддерживается с первого релиза или это доработка?
- [ ] Авторизованная зона в первой волне — нужно ли проектировать персонализацию саджестов или сначала анонимный сценарий?

---

## References

1. [Perplexity vs Google Search: How Conversational UX Won 170M ...](https://techfoundernotes.com/en/perplexity-vs-google-conversational-ux/) - 2024-2025: Perplexity AI experiences remarkable growth that's attracting industry attention, includi...

2. [Empty State UX Examples & Best Practices - Pencil & Paper](https://www.pencilandpaper.io/articles/empty-states) - Improving empty state UX patterns with examples from onboarding, using dummy data, inbox zero and no...

3. [Distinguishing AI and search : r/UXDesign - Reddit](https://www.reddit.com/r/UXDesign/comments/1hpqa2y/distinguishing_ai_and_search/) - I'm looking for advice on how to distinguish the ability for a user to perform a search and submit a...

4. [Search or Ask? 3 UI Patterns That Clarify User Intent - BlendX Design](https://blendx.design/blogs/search-vs-ask-3-ui-patterns-that-eliminate-user-confusion/) - Where most UI's go wrong. Too many products use a single, unmarked input field that tries to do ever...

5. [[PDF] UX Analysis of Perplexity AI - NextLeap](https://assets.nextleap.app/submissions/UXAnalysisofPerplexityAI-99fd187d-4db8-4630-aa0e-22296f380bfb.pdf) - Step 1 – Asking the Question. Step 4 – Using Follow-Up Prompts. Insight: Answers are clearly formatt...

6. [Perplexity's high bar for UX in the age of AI - Matt Moore](https://mttmr.com/2024/01/10/perplexitys-high-bar-for-ux-in-the-age-of-ai/) - But now it's 2024. One company has emerged as pushing the frontier of a UX powered by AI: Perplexity...

7. [AI UX Patterns | Follow up | ShapeofAI.com - The Shape of AI](https://www.shapeof.ai/patterns/follow-up) - Anchor follow ups in what just happened. Base suggested next prompts on the system's last response o...

8. [Using product analytics to find metrics that connect to retention](https://mixpanel.com/blog/product-analytics-predict-retention/) - Learn how product analytics helps uncover key metrics that drive retention and improve user engageme...

9. [Yandex unveils the future of AI in search technology - Intelligent CIO](https://www.intelligentcio.com/me/2024/05/23/yandex-unveils-the-future-of-ai-in-search-technology/) - The AI-driven platform offers a seamless query experience, giving users comprehensive answers drawn ...

10. [Empty states in UX done right: 4 inspiring examples - LogRocket Blog](https://blog.logrocket.com/ux-design/empty-states-ux-examples/) - Never leave users at a dead end — An empty state should always suggest what to do next. Even a simpl...

11. [Design Elements of Search - The Search Bar](https://findwise.com/blog/design-elements-of-search-the-search-bar/) - Examples of good placeholder texts is: “What are you looking for today?” “How can we help?” “Find pe...

12. [10 UX Patterns Every AI Chat Interface Needs - YouTube](https://www.youtube.com/watch?v=bppkpufBJsI) - AI chat interfaces are everywhere, but most of them still get the UX wrong. In this video, I break d...

13. [9 UX Best Practice Design Patterns for Autocomplete Suggestions ...](https://baymard.com/blog/autocomplete-design) - In this article, we'll cover our Premium research findings on how to implement 9 UX best practices f...

14. [Five Simple Steps For Better Autocomplete UX](https://smart-interface-design-patterns.com/articles/autocomplete-ux/) - Always show autocomplete suggestions on focus, use tap-ahead suggestions and provide autocomplete fi...

15. [Artificial Intelligence (Russian market) - TAdviser](https://tadviser.com/index.php/Article:Artificial_Intelligence_(Russian_market)) - The article is devoted to the development of the artificial intelligence market in Russia. A separat...

16. [[chatbot] Increase character limit for AI assistant questions #13593](https://github.com/OpenCTI-Platform/opencti/issues/13593) - Our chatbot/AI assistant currently limits question input to 256 characters. This restriction prevent...

17. [UX Design Patterns for Loading - Pencil & Paper](https://www.pencilandpaper.io/articles/ux-pattern-analysis-loading-feedback) - Loading UX takes careful consideration of both the user's and the system's context to use the approp...

18. [Rethinking UX: Emerging Interfaces for the AI Age - WebRTC.ventures](https://webrtc.ventures/2025/04/ai-interface-design/) - In this post, I explore the emerging principles of AI interface design and how they differ from trad...

19. [What Is the Best Practice of Placeholder Text? - Blog - Lipsum Hub](https://blog.lipsumhub.com/what-is-the-best-practice-of-placeholder-text/) - When crafting placeholder text, ensure it is specific and descriptive. Avoid generic terms like “Ent...

20. [5 Common UX Mistakes in AI Products (And How to Solve Them)](https://withrival.com/blog/5-common-ux-mistakes-in-ai-products-and-how-to-solve-them) - The Solution: Design for AI fallibility. Expect edge cases and build for them. Use fallback content,...

21. [UX Foundations: Loading States, Errors, Performance, Consistency ...](https://www.linkedin.com/posts/kitturkoustubh_uxfordevelopers-frontendengineering-uiux-activity-7424756354017320960-Ez_C) - Small things matter: • Loading indicators • Micro-interactions • Error messages that actually help T...

