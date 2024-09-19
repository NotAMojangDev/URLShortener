export default function isValidUrl(urlString: string): boolean {
    if (!urlString.match(/^https?:\/\/.*/gim)) return false;
    try { 
        new URL(urlString);
        return true;
    } catch (_) {
        return false;
    }
}