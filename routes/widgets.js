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
  
    db.addAttendee(choiceData).then(function(attendee) {
      const choicesObj = req.body.choices;
      return Object.keys(choicesObj)
      .filter(id => choicesObj[id] === 'on')
      .map(option_id => {
        return db.addChoice(option_id, attendee.id, choiceData.pollId)
      })
    }).then(() => {
      res.redirect(`/schoodles/${choiceData.link}`)
    }).catch(err => {
      console.error(err);
    });
  })
  return router;
}
