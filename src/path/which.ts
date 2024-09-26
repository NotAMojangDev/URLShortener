import { Context } from "hono";
import Queries from "../util/queries";
import { pageNotFound } from "../util/404";

export function whichPath(ctx: Context, db: D1Database): Promise<Response> {
    let url: URL = new URL(ctx.req.url);
    
    let id: String = url.pathname.split("/")[2]
    
    return whichId(id, db)
}

export async function whichId(id: String, db: D1Database): Promise<Response> {    
    let ref: string | null = await db.prepare(Queries.getURL).bind(id).first("url")
    
    if (ref == null) return pageNotFound();
    
    return new Response(id + " redirects to " + ref)
}

export async function whichEndpoint(ctx: Context, db: D1Database): Promise<Response> {    
    let id: string | undefined = ctx.req.query("id");
    
    if (!id) return new Response("id not found!", {status: 404})
    
    let ref: string | null = await db.prepare(Queries.getURL).bind(id).first("url")
    
    if (ref == null) return pageNotFound();
    
    return new Response(id + " redirects to " + ref);
}