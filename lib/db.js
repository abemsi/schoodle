let dbParams = {};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
} else {
  dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  };
}

const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});

module.exports = () => {

const queryFunk = (sqlText, values) => {
  const start = Date.now()
  return pool.query(sqlText, values)
  .then((res) => {
    const duration = Date.now() - start;
    console.log(
      'executed query',
      { sqlText, duration, rows: res.rowCount }
    );
    return res;
  });
};

// Add a new user to the database
const addUser = function(user, done) {
  console.log(user);
  queryFunk(`
  INSERT INTO users (name, email)
  VALUES ($1, $2)
  RETURNING *;
  `, [user['creator-name'], user.email])
  .then(res => {
    done(res.rows);
  });
};

// Add a new poll to the database
const addPoll =  function(poll) {
  return queryFunk(`
  INSERT INTO polls (title, description, location, link, organizer_id)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;
  `, [poll['event-title'], poll.description, poll.location, poll.link, poll.organizer_id])
  .then(res => {
    return res.rows;
  })
};

// Add a new option for the poll to the database
const addOption =  function(option, done) {
  return queryFunk(`
  INSERT INTO options (date, poll_id)
  VALUES ($1, $2)
  RETURNING *;
  `, [option.calendarDate, option.poll_id])
  .then(res => {
     done(null, res.rows);
  })
  .catch(e => { 
  // catch is used to 'catch' an error if queryFunk throws one
    done(e);
});
};

// Add a new choice for the options to the database
const addChoice =  function(choice) {
  return queryFunk(`
  INSERT INTO choices (option_id, attendee_id, poll_id)
  VALUES ($1, $2, $3)
  RETURNING *;
  `, [choice.option_id, choice.attendee_id, choice.poll_id])
  .then(res => {
    return res.rows;
  });
};

// Delete a choice from the options to the database
const deleteChoice =  function(choice) {
  return queryFunk(`
  DELETE FROM choices (option_id, attendee_id, poll_id)
  VALUES ($1, $2, $3)
  RETURNING *;
  `, [choice.option_id, choice.attendee_id, choice.poll_id])
  .then(res => {
    return res.rows;
  });
};

const getAllPollInformation = function(link) {
  
  const queryParams = [];
  
  return queryFunk( 
    `SELECT * FROM options
    JOIN polls on polls.id = poll_id
    WHERE polls.link = $1;`,
    [link])
    
    .then(res => {
    return res.rows;
  }).then(options => {
   return queryFunk(`SELECT users.name AS name, users.email AS email, options.date AS choice, users.id AS attendeeID
    FROM choices
    JOIN polls ON polls.id = poll_id
    JOIN users ON users.id = choices.attendee_id
    JOIN options ON options.id = choices.option_id
    WHERE link = $1`, [link]).then(res => {
      const results = res.rows.reduce(function(availabilities, attendeeChoice) {
        const availabilityIndex = availabilities.findIndex(av => av.attendeeID === attendeeChoice.attendeeID);
        if (availabilityIndex) {
          availabilities[availabilityIndex].choices.push(attendeeChoice.choice)
        } else {
          availabilities.push({
            name: attendeeChoice.attendee_id,
            attendeeID: attendeeChoice.attendeeID,
            choices: [attendeeChoice.choice] 
          });
        }
        return availabilities;
      },[])
      return {
        options, 
        results }
    })
  })
}
 return {
  addUser,
  addPoll,
  addOption,
  addChoice,
  deleteChoice,
  getAllPollInformation
 }
};
