import { API_ENDPOINT } from '../constants'
export const getNews = async ({ page = 1, pageSize = 9, search }) => {
  let url = `${API_ENDPOINT}&pageSize=${pageSize}&page=${page}`
  if (search) {
    url += `&q=${search}`
  }
  let data = await fetch(url)
  return data.json()
}
