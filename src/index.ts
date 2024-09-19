import { Hono } from 'hono'
import { env } from 'hono/adapter'
import newLink from './path/new_link'
import handleRedirect from './path/redirect'
import createLinkEndpoint from './path/create'

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.get('/', (ctx) => newLink(ctx))

app.get('/create', (ctx) => createLinkEndpoint(ctx, ctx.env.LINKS_DB))

app.get('/*', (ctx) => handleRedirect(ctx, ctx.env.LINKS_DB))

export default app