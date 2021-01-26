const router = require("express").Router();
const getUserInfoFromToken = require("../helpers/getUserInfoFromToken");
const db = require("../databse");
const { v4 } = require("uuid");

router.post("/", async (req, res) => {
  const token = req.header("loginToken");
  const { postId, comment } = req.body;
  const user = await getUserInfoFromToken(token);
  if (user) {
    db.serialize(() => {
      const stmt = db.prepare("INSERT INTO comments  VALUES (?,?,?,?)");
      stmt.run(v4(), postId, user.id, comment);
      stmt.finalize();
      req.body.success = true;
      res.status(200).json(req.body);
    });
  } else {
    res.status(400).send({ success: false });
  }
});

//get comment by post id
router.get("/:id", (req, res) => {
  const postId = req.params.id;

  db.all("SELECT * FROM comments WHERE postId = ?", [postId], (err, rows) => {
    if (!err) {
      if (rows) {
        for (let i = 0; i < rows.length; i++) {
          db.get(
            "SELECT name FROM users WHERE id = ?",
            [rows[i].userId],
            (err, row) => {
              rows[i].name = row.name;

              if (i == rows.length - 1) {
                res.status(200).json(rows);
              }
            }
          );
        }
      } else {
        res.status(400).json([]);
      }
    } else {
      res.status(400).json([]);
    }
  });
});
module.exports = router;
