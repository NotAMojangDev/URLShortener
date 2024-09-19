import { Context } from "hono";
import Queries from "../util/queries";
import { pageNotFound } from "../util/404";

export default async function handleRedirect(ctx: Context, db: D1Database) {
    let url: URL = new URL(ctx.req.url);
    let getQuery: string = Queries.getURL;
    
    let id = url.pathname.split("/")[1]
    
    let ref: string | null = await db.prepare(getQuery).bind(id).first("url")
    
    if (ref === null) return pageNotFound();
    
    return redirect(ref)
}

async function redirect(url: string, status: number = 302): Promise<Response> {
    return Response.redirect(url, status);
}
