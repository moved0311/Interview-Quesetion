export const API_ENDPOINT = 'https://newsapi.org/v2/top-headlines?country=tw&apiKey=c14ac1132c5b4fabac7ee0bb1818ea79'
export const GOOGLE_SEARCH_SUGGEST =
  'https://suggestqueries.google.com/complete/search?output=toolbar&hl=zh-hant&gl=tw&client=chrome'

// styles
export const NAVIGATION_WIDTH = 230
export const NAVIGATION_FOLD_WIDTH = 56

// data
export const PATH_DATA = [
  { title: '熱門報導', icon: '/navigation/home.svg', path: '' },
  { title: '台灣', icon: '/navigation/area.svg', path: 'taiwan' },
  { title: '中國', icon: '/navigation/area.svg', path: 'china' },
  { title: '全球', icon: '/navigation/global.svg', path: 'global' },
  { title: '娛樂', icon: '/navigation/entertainment.svg', path: 'entertainment' },
  { title: '商業', icon: '/navigation/business.svg', path: 'business' },
  { title: '運動', icon: '/navigation/sport.svg', path: 'sport' },
  { title: '科技', icon: '/navigation/technology.svg', path: 'technology' },
  { title: '搜尋結果', path: 'result', visible: false },
]
