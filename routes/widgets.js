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
      console.log('HELLO JOE', req.body);
      const choicesObj = req.body.choices;
      if (choicesObj === undefined) {
        $(".isa_error").show()
      setTimeout( function () {
        $(".isa_error").hide()  
      },4000) 
        res.status(420).send('No checkbox was marked')
        return;
      }
      return Object.keys(choicesObj)
      .filter(id => choicesObj[id] === 'on')
      .map(option_id => {
        return db.addChoice(option_id, attendee.id, choiceData.pollId)
      })
    }).catch(err => {
      console.log('db.Addattendee :', err)
    }).then(() => {
      res.redirect(`/schoodles/${choiceData.link}`)
    }).catch('redirect', e => {
      console.error(e);
    });
  })
  return router;
}
