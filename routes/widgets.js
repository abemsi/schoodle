/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  // Add new Attendee
  router.post("/", (req, res) => {
    const choiceData = req.body;
    console.log('reqbody in widgets :', choiceData)
  
    // db.addUser(choiceData, function (rows) {     
    //   const newUser = rows[0];
    //     if (!newUser) {
    //     res.send({error: "error"});
    //     return;
    //    }
    
    db.addChoice(choiceData).then(function (rows) {     
      const newChoice = rows[0];
      if (!newChoice) {
        res.send({error: "error"});
      return;
      };
    }).catch(err => {
      console.error(err);
    // });
  });
  })
  return router;
};
