import config from '../../config'

export function url(path) {
  return `${config.TC_BASE_URL.replace(/\/$/, '')}/${path}`
}
