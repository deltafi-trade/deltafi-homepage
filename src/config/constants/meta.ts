import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'DeltaFi',
  description:
    'Description Template'
}

export const getCustomMeta = (path: string): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `Home | DeltaFi`,
      }
    default:
      return null
  }
}
