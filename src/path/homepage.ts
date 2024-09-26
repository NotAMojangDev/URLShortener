import { Context } from "hono";
import newLink from '../views/homepage.html';

export default async function newLinkPage(ctx: Context) {
    
    return new Response(newLink, {
        headers: {
            "content-type": "text/html"
        }
    })
    
}