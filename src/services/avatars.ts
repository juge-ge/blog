import { reactive } from 'vue'

export const avatarLibrary = ['ridge', 'shore', 'forest', 'dusk', 'field', 'snow'].map(name => `/avatars/${name}.svg`)
const key = 'blog_public_avatars_v1'
function load(): Record<string, string> {
  try { return JSON.parse(localStorage.getItem(key) || '{}') } catch { return {} }
}
const custom = reactive<Record<string, string>>(load())
const identity = (name: string) => name.trim().toLowerCase()
export function defaultAvatar(name: string) {
  let hash = 0
  for (const char of identity(name)) hash = (Math.imul(hash, 31) + char.codePointAt(0)!) >>> 0
  return avatarLibrary[hash % avatarLibrary.length]!
}
export function avatarFor(name: string, configured?: string) {
  return custom[identity(name)] || configured || defaultAvatar(name)
}
export function saveAvatar(name: string, url: string) {
  const next = { ...custom }
  if (url) next[identity(name)] = url
  else delete next[identity(name)]
  localStorage.setItem(key, JSON.stringify(next))
  if (url) custom[identity(name)] = url
  else delete custom[identity(name)]
}
