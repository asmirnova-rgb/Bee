export const spacesMock = [
  {
    id: 's1',
    icon: '📚',
    title: 'Английский A2',
    subtitle: 'Практика лексики',
    active: true,
  },
  {
    id: 's2',
    icon: '💪',
    title: 'План тренировок',
    subtitle: 'Восьмая неделя',
    active: false,
  },
  {
    id: 's3',
    icon: '✈️',
    title: 'Поездка в Сочи',
    subtitle: 'Отели и маршруты',
    active: false,
  },
]

export const suggestionChipsNewUser = [
  'Курс доллара',
  'Пробки в Москве',
  'Что посмотреть',
  'Новости сегодня',
]

export const sourcesPills: {
  n?: number
  name: string
  more?: boolean
}[] = [
  { n: 1, name: 'ЦБ РФ' },
  { n: 2, name: 'РБК' },
  { n: 3, name: 'БКС' },
  { more: true, name: '+2' },
]

export const answerWithCitations = `Ключевая ставка в текущем коридоре остаётся ориентиром для рынка[1]. По данным аналитиков, курс доллара к рублю формируется под влиянием спроса на валюту и денежно-кредитной политики[2]. Краткосрочно возможна повышенная волатильность[3].`

export const followUpCards = [
  'Сравни прогнозы на неделю',
  'Как это влияет на ипотеку',
  'Покажи динамику за год',
]

export const spaceDocuments = [
  { type: 'pdf', title: 'Чек-лист поездки.pdf' },
  { type: 'note', title: 'Отели — заметка' },
]

export const spaceQueries = [
  {
    title: 'Погода в Сочи на неделю',
    preview: 'Средняя t°, осадки, ветер…',
    pills: ['Гидромет', 'Яндекс'],
  },
  {
    title: 'Лучшие пляжи Адлера',
    preview: 'Отзывы, инфраструктура…',
    pills: ['2ГИС', 'Отзывы'],
  },
]
