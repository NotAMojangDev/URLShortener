import { Context } from "hono";
import { generateIDCustom, generateStandardID } from "../util/idGen";
import Queries from "../util/queries";
import isValidUrl from "../util/validateURL";

export default async function createLinkEndpoint(ctx: Context, db: D1Database) {
    let url: string | undefined = ctx.req.query("url")
    
    if (url === undefined) return new Response("No URL provided!", {status: 400})
    
    if (!isValidUrl(url)) return new Response("Invalid URL!", {status: 400})
    
    let Query = Queries.getURL;
    let iter = 0;
    let id: String;
    do {
        if (iter === 10) {
            id = generateIDCustom(11)
            break;
        }
        id = generateStandardID();
        var result = await db.prepare(Query).bind(id).first("url")
        iter++;
    } while (result !== "") 
    
    let writeQuery: string = Queries.saveURL;
    
    await db.prepare(writeQuery).bind(id, url).run()
    
    return new Response("https://s.namd.dev/" + id)
}