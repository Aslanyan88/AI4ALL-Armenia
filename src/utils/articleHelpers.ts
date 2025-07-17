import { articlesData } from '../data/articlesData'

export type Language = 'en' | 'hy' | 'ru'

export const getArticleByNumericId = (numericId: number) => {
  // Map numeric IDs to article IDs
  const idMapping: { [key: number]: string } = {
    1: 'article-1',
    2: 'article-2'
  }
  
  const articleId = idMapping[numericId]
  if (!articleId) return undefined
  
  return articlesData.articles.find(article => article.id === articleId)
}

export const getText = (text: any, language: Language): string => {
  if (!text) return ''
  if (typeof text === 'string') return text
  if (typeof text === 'object') {
    return text[language] || text.en || text.am || text.hy || text.ru || ''
  }
  return ''
}
