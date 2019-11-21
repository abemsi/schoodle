/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.post("/", (req, res) => {
    const pollData = req.body;
      db.addUser(pollData, function (rows) {     
        const newUser = rows[0];
          if (!newUser) {
          res.send({error: "error"});
          return;
         };
      
      // Add new poll - running function to insert: title, description, location of poll
      req.session.user_id = newUser.id;
      let pollpayload = {...pollData, organizer_id: newUser.id };
      db.addPoll(pollpayload).then(function (rows) {     
        const newPoll = rows[0];
          if (!newPoll) {
            res.send({error: "error"});
            return;
          };

        // Split our dates from req.body, run function to add them to database
        const calendarDates = pollData['calendar-dates'].split(',')
        calendarDates.map(function(date) {
        let optionspayload = {calendarDate: date, poll_id: newPoll.id }
          db.addOption(optionspayload, function (err, results) {     
            if (err) {
              console.error(err.message);
              return;
            };
          });     
        })      
      }).catch(err => {
        console.error(err);
      }) 
      res.redirect(`/schoodles/${pollData.link}`);       
    });
  });
  return router;
};