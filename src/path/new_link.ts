import { Context } from "hono";
import newLink from '../views/new.html';

export default async function newLinkPage(ctx: Context) {
    
    return new Response(newLink, {
        headers: {
            "content-type": "text/html"
        }
    })
    
}