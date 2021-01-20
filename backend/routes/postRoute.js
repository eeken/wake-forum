const router = require("express").Router();
require("dotenv/config");
const { v4 } = require("uuid");
const jwt = require("jsonwebtoken");
const db = require("../database");
const postValidation = require("../validators/postValidator");
const getUserInfoFromToken = require("../helpers/getUserInfoFromToken");

router.post("/create", (req, res) => {
  console.log(req.body);
  const { title, body } = req.body;
  const validation = postValidation(req.body);
  if (validation.hasOwnProperty("error")) {
    validation.success = false;
    res.status(200).json(validation);
  } else {
    const token = req.header("loginToken");
    if (token) {
      jwt.verify(token, "kkkajash98sh9snuiusuh9shsbsjs", (err, data) => {
        if (!err) {
          // Insert post into data base
          if (data) {
            db.serialize(() => {
              const stmt = db.prepare("INSERT INTO posts  VALUES (?,?,?,?)");
              stmt.run(v4(), data.id, title, body);
              stmt.finalize();
              req.body.success = true;
              res.status(200).json(req.body);
            });
          } else {
            res.status(400).json({ success: false });
          }
        } else {
          res.status(400).json({ success: false });
        }
      });
    } else {
      res.status(400).json({ success: false });
    }
  }
});
// get all the posts
router.get("/", (req, res) => {
  db.serialize(function () {
    db.all("SELECT * FROM posts", [], (err, rows) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        res.status(200).json([]);
      }
    });
  });
});

// get specific user pots

router.get("/specificUser", async (req, res) => {
  const token = req.header("loginToken");
  const user = await getUserInfoFromToken(token);

  if (user) {
    db.serialize(function () {
      db.all(
        "SELECT * FROM posts WHERE ownerId = ?",
        [user.id],
        (err, rows) => {
          if (!err) {
            res.status(200).json(rows);
          } else {
            res.status(200).json({});
          }
        }
      );
    });
  } else {
    res.status(400).json({});
  }
});

// get post by id
router.get("/:id", (req, res) => {
  const postId = req.params.id;

  db.get("SELECT * FROM posts WHERE id = ?", [postId], (err, row) => {
    if (!err) {
      if (row) {
        res.status(200).json(row);
      } else {
        res.status(400).json({});
      }
    } else {
      res.status(400).json({});
    }
  });
});

// delete post only admin or mederator
router.post("/delete", (req, res) => {
  db.serialize(() => {
    const stmt = db.prepare("DELETE FROM posts WHERE id = ?");
    stmt.run(req.body.id);
    stmt.finalize();
  });
  res.status(200).json({ success: true });
});

module.exports = router;
