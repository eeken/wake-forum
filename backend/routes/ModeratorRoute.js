const router = require("express").Router();
const { v4 } = require("uuid");
const db = require("../databse");

router.post("/", (req, res) => {
  const { useranme, pwd } = req.body;
  if (useranme && pwd) {
    db.serialize(() => {
      const stmt = db.prepare("INSERT INTO moderators VALUES (?,?,?)");
      stmt.run(v4(), useranme, pwd);
      stmt.finalize();
    });

    res.status(200).json({ sucesss: true });
  } else {
    res.status(400).json({ sucesss: false });
  }
});

//get all the moderators

router.get("/", (req, res) => {
  db.serialize(function () {
    db.all("SELECT * FROM moderators", [], (err, rows) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        res.status(200).json([]);
      }
    });
  });
});

// delete user only admin or mederator
router.post("/delete", (req, res) => {
  db.serialize(() => {
    const stmt = db.prepare("DELETE FROM moderators WHERE id = ?");
    stmt.run(req.body.id);
    stmt.finalize();
  });
  res.status(200).json({ success: true });
});
module.exports = router;
