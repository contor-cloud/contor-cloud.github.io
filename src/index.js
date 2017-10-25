import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, HttpError, makeRouteConfig, Redirect, Route }
  from 'found'

import App from './components/App'
// import Page from './components/Page'
import MdPage from './components/MdPage'

async function fetchMd(postId) {
  const url = `https://raw.githubusercontent.com/contor-cloud/contor-cloud.github.io/master/static/${postId}.md`
  const result = await fetch(url, {mode: 'cors'})
  const data = await result.text()

  return data
}

const renderFunction = ({ Component, props }) => (
  Component && props ? (
    <Component {...props} />
  ) : (
    <div><small>Loading&hellip;</small></div>
  )
)

const BrowserRouter = createBrowserRouter({
  routeConfig: makeRouteConfig(
    <Route
      path="/"
      Component={App}
    >
      <Route
        Component={({data}) => <MdPage content={data}/>}
        getData={() => (
          fetchMd('LandingPage').catch(() => { throw new HttpError(404) })
        )}
        render={({ Component, props }) => renderFunction({ Component, props })}
      />
      <Route
        path="blog/:postId"
        Component={({data}) => <MdPage content={data}/>}
        getData={({ params: { postId } }) => (
          fetchMd(postId).catch(() => { throw new HttpError(404) })
        )}
        render={({ Component, props }) => renderFunction({ Component, props })}
      />
      <Redirect
        from="blog"
        to="/"
      />
    </Route>
  ),

  renderError: ({ error }) => ( // eslint-disable-line
    <App>
      {error.status === 404 ? 'Not found' : 'Error'}
    </App>
  ),
})

ReactDOM.render(
  <BrowserRouter />,
  document.getElementById('root'),
)
