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
}


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
}

// exports.addUser = addUser;

// Add a new poll to the database
const addPoll =  function(poll) {
  return queryFunk(`
  INSERT INTO polls (title, description, location, organizer_id)
  VALUES ($1, $2, $3, $4)
  RETURNING *;
  `, [poll['event-title'], poll.description, poll.location, poll.organizer_id])
  .then(res => {
    return res.rows;
  });
}

// exports.addPoll = addPoll;

// Add a new option for the poll to the database
const addOption =  function(option) {
  return queryFunk(`
  INSERT INTO options (date, poll_id)
  VALUES ($1, $2)
  RETURNING *;
  `, [option['calendar-dates'], option.poll_id])
  .then(res => {
    return res.rows;
  });
}

// exports.addOption = addOption;

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
}

// exports.addChoice = addChoice;

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
}

// exports.deleteChoice = deleteChoice;
 return {
  addUser,
 addPoll,
 addOption,
 addChoice,
 deleteChoice
 }
};
