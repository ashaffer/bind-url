/**
 * Imports
 */

import catchLinks from 'catch-links'

/**
 * Bind
 */

function bindUrl ({wnd, root}, cb) {
  if (root === undefined) {
    root = wnd
  }

  catchLinks(root, pushState)
  wnd.addEventListener('popstate', update)

  // Initialize
  update()

  function update () {
    const {pathname, search} = wnd.location
    cb([pathname, search].filter(Boolean).join(''))
  }

  function pushState (url) {
    wnd.history.pushState({}, '', url)
    cb(url)
  }
}

/**
 * Exports
 */

export default bindUrl
