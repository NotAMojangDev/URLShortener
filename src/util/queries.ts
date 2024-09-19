const Queries = {
    getURL: "SELECT url FROM stored_urls WHERE id = ?",
    saveURL: "INSERT INTO stored_urls (id, url) VALUES (?, ?)",
}

export default Queries;