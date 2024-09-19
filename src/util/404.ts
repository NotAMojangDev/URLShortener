import notfound from "../views/notfound.html";

export function pageNotFound(): Response {
    return new Response(notfound, {
        headers: {
            "content-type": "text/html"
        },
        status: 404
    });
}