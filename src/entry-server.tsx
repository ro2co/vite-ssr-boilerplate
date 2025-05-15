import { renderToString } from 'react-dom/server'
import { Router } from './router.tsx'
import { StaticRouter } from 'react-router-dom/server'

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <Router location={url} />
    </StaticRouter>
  )
  console.log('SSR html:', html)
  return { html }
}
