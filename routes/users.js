/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
    console.log('working')
    .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(404)
          .json({ error: err.message });
      });
  });
  
  router.post("/", (req, res) => {
    const user = req.body;
    console.log('MADE POST TO DATABASE')
    database.addUser(user)
    .then(user => {
      if (!user) {
        res.send({error: "error"});
        return;
      }
      req.session.user_id = user.id;
      res.send("🤗");
    })
    .catch(e => res.send(e));
  });
  
  return router;
};
