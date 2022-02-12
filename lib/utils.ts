import { htmlUnescape } from 'escape-goat'

// https://gist.github.com/alexgibson/1704515
export const escapeHtml = s => {
  if (typeof s === 'string') {
    return s.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;')
  }
}

export const unescapeHtml = s => {
  if (typeof s === 'string') {
    return htmlUnescape(s).replace(/&#x2F;/g, '/')
  }
}

export function isValidDate(date): boolean {
  return date instanceof Date && !isNaN(date as any)
}