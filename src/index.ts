import { Hono } from 'hono'
import { env } from 'hono/adapter'
import newLink from './path/new_link'
import handleRedirect from './path/redirect'
import createLinkEndpoint from './path/create'
import { whichEndpoint, whichPath } from './path/which'

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.get('/', (ctx) => newLink(ctx))

app.post('/new', (ctx) => createLinkEndpoint(ctx, ctx.env.LINKS_DB))

app.get('/which', (ctx) => whichEndpoint(ctx, ctx.env.LINKS_DB))

app.get('/which/*', (ctx) => whichPath(ctx, ctx.env.LINKS_DB))

app.get('/*', (ctx) => handleRedirect(ctx, ctx.env.LINKS_DB))

export default app