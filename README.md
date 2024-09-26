# URL Shortener

I happend to be bored one day 

and this idea came to me

This app is hosted on Cloudflare Workers at https://s.namd.dev

## Enpoints:
- https://s.namd.dev/ - Homepage
- https://s.namd.dev/new?url={URL} - params: {URL} to redirect to - Create a URL and get it back as text
- https://s.namd.dev/{ID} - params: {ID}: ID for your redirect - redirect to the destination of the ID
- https://s.namd.dev/{ID}+ - params: {ID}: ID for checking - show the destination of the ID
- https://s.namd.dev/which(/|?id=){ID} - params: {ID}: ID for checking - show the destination of the ID

## This app uses:
- Cloudflare Workers
- Cloudflare D1
- Hono
- NanoID

It was a fun experiment.

If you have any ideas to improve this feel free to contact me via Discord, Email: contact@namd.dev or Github Issues