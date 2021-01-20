const router = require("express").Router();
const registerValidation = require("../validators/registerValidator");
require("dotenv/config");
const { v4 } = require("uuid");
const jwt = require("jsonwebtoken");
const db = require("../database");
const { route } = require("./postCommentRoute");

//Register Route
router.post("/register", async (req, res) => {
  const { name, email, pwd } = req.body;
  const validation = registerValidation(req.body);
  if (validation.hasOwnProperty("error")) {
    validation.success = false;
    res.status(400).json(validation);
  } else {
    //check weather email already exists

    db.get("SELECT email FROM users Where email = ?", [email], (err, row) => {
      if (!err) {
        if (row) {
          // email already exists
          const jsonRespone = {
            error: {
              details: [
                {
                  context: { label: "email" },
                  message: "Email already Exists",
                },
              ],
            },
          };
          jsonRespone.success = false;
          res.status(400).json(jsonRespone);
        } else {
          // Now we are going to insert user into the database
          const id = v4();
          db.serialize(() => {
            const stmt = db.prepare("INSERT INTO users VALUES (?,?,?,?)");
            stmt.run(id, name, email, pwd);
            stmt.finalize();
          });

          const loginToken = jwt.sign(
            JSON.stringify({
              id: id,
              name: name,
              email: email,
            }),
            "kkkajash98sh9snuiusuh9shsbsjs"
          );

          res.status(200).json({
            success: true,
            loginToken: loginToken,
          });
        }
      }
    });
  }
});

//Login Route

router.post("/login", async (req, res) => {
  if (req.body.which == "admin") {
    const { username, pwd } = req.body;
    db.get(
      "SELECT * FROM admin WHERE username = ? AND pwd = ?",
      [username, pwd],
      (err, row) => {
        if (!err) {
          if (row) {
            // generate JWT login Token
            row.success = true;
            res.status(200).json(row);
          } else {
            const jsonRespone = {
              error: {
                details: [
                  {
                    context: { label: "email" },
                    message: "emai or password was invalid",
                  },
                ],
              },
            };
            jsonRespone.success = false;
            res.status(400).json(jsonRespone);
          }
        }
      }
    );
  } else if (req.body.which == "moderator") {
    const { username, pwd } = req.body;
    db.get(
      "SELECT * FROM moderators WHERE username = ? AND pwd = ?",
      [username, pwd],
      (err, row) => {
        if (!err) {
          if (row) {
            // generate JWT login Token
            row.success = true;
            res.status(200).json(row);
          } else {
            const jsonRespone = {
              error: {
                details: [
                  {
                    context: { label: "email" },
                    message: "emai or password was invalid",
                  },
                ],
              },
            };
            jsonRespone.success = false;
            res.status(400).json(jsonRespone);
          }
        }
      }
    );
  } else {
    const { email, pwd } = req.body;
    db.get(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, pwd],
      (err, row) => {
        if (!err) {
          if (row) {
            // generate JWT login Token
            const loginToken = jwt.sign(
              JSON.stringify({
                id: row.id,
                name: row.name,
                email: row.email,
              }),
              "kkkajash98sh9snuiusuh9shsbsjs"
            );

            res.status(200).json({
              success: true,
              loginToken: loginToken,
            });
          } else {
            const jsonRespone = {
              error: {
                details: [
                  {
                    context: { label: "email" },
                    message: "emai or password was invalid",
                  },
                ],
              },
            };
            jsonRespone.success = false;
            res.status(400).json(jsonRespone);
          }
        }
      }
    );
  }
});
// user info Route

router.get("/getUserInfo", (req, res) => {
  const token = req.header("loginToken");
  if (token) {
    jwt.verify(token, "kkkajash98sh9snuiusuh9shsbsjs", (err, data) => {
      if (!err) {
        data.success = true;
        res.json(data);
      } else {
        res.status(400).json({ success: false });
      }
    });
  } else {
    res.status(400).json({ success: false });
  }
});

//get user by Email

router.get("/getByEmail/:email", (req, res) => {
  const email = req.params.email;

  db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
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

// delete user only admin or mederator
router.post("/delete", (req, res) => {
  db.serialize(() => {
    const stmt = db.prepare("DELETE FROM users WHERE id = ?");
    stmt.run(req.body.id);
    stmt.finalize();
  });
  res.status(200).json({ success: true });
});
module.exports = router;
