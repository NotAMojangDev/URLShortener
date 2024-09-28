const table = "stored_urls";
const idColumn = "id"
const urlColumn = "url"

const Queries = {
    getURL: `SELECT ${urlColumn} FROM ${table} WHERE ${idColumn} = ?`,
    saveURL: `INSERT INTO ${table} (${idColumn}, ${urlColumn}) VALUES (?, ?)`,
    getIDbyURL: `SELECT ${idColumn} FROM ${table} WHERE ${urlColumn} = ?`
}

export default Queries;