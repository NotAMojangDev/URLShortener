import { Context } from "hono";
import { generateIDCustom, generateStandardID } from "../util/idGen";
import Queries from "../util/queries";
import isValidUrl from "../util/validateURL";

export default async function createLinkEndpoint(ctx: Context, db: D1Database) {
    let url: string | undefined = ctx.req.query("url")
    
    if (url === undefined) return new Response("No URL provided!", {status: 400})
    
    if (!isValidUrl(url)) return new Response("Invalid URL!", {status: 400})
    
    let id: String = generateStandardID();
    
    let Query = Queries.getURL;
    
    let result = await db.prepare(Query).bind(id).first("url")
    
    if (result === "") id = generateIDCustom(11)
    
    let writeQuery: string = Queries.saveURL;
    
    await db.prepare(writeQuery).bind(id, url).run()
    
    return new Response("https://s.namd.dev/" + id)
}