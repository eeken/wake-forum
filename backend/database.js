const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("forum.db");
// db.run("CREATE TABLE moderators (id TEXT, username TEXT, pwd TEXT)");

module.exports = db;
