/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  
  // router.get("/", (req, res) => {
  
  //   db.queryFunk(`SELECT * FROM users;`)
  //   .then(data => {
  //       const users = data.rows;
  //       res.json({ users });
  //     })
  //     .catch(err => {
  //       res
  //         .status(404)
  //         .json({ error: err.message })
  //     });
  // });

  router.post("/", (req, res) => {
    const pollData = req.body;
    db.addUser(pollData, function (rows) {     
     const newUser = rows[0];
      if (!newUser) {
        res.send({error: "error"});
        return;
      }
      req.session.user_id = newUser.id;
      let pollpayload = {...pollData, organizer_id: pollData.id };
      console.log(rows[0] + 'hello')
      
      db.addPoll(pollpayload).then(function (rows) {     
        const newPoll = rows[0];
        if (!newPoll) {
          res.send({error: "error"});
          return;
        }
      }).catch(err => {
        console.error(err);
      }) 
      res.redirect("/schoodles");
      // WORK IN PROGRESS below
        // let optionspayload = {...pollData, date, poll_id: pollData.id };
        // db.addOptions(optionspayload, function (rows) {     
        //  console.log('@@@@@@@@@@@@@@@@@@@@2', rows);
        //   const newOption = rows[0];
        //   if (!newOption) {
        //     res.send({error: "error"});
        //     return;
        //   }
        // })
         
      
    });
  });
  return router;
 };
