import slugify from './slugify'

const toAnchor = (href = '') => {
  const index = href.indexOf('#')
  return index >= 0 ? href.substr(index) : ''
}

// TODO Account for redirect_from URLs somehow; they currently won't match.
// This comment should not be true anymore since we're using 300 redirects

const isItemActive = (location, item) => {
  if (location.hash) {
    if (item.href) {
      return location.hash === toAnchor(item.href)
    }
  } else if (item.id.includes('html')) {
    return location.pathname.includes(item.id)
  }
  const slugId = location.pathname.split('/').slice(-1)[0]
  return slugId === slugify(item.id)
}

export default isItemActive
