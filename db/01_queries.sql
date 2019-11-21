/* getAllPollInformation */

-- SELECT * FROM options
-- JOIN polls ON polls.id = poll_id
-- JOIN users ON users.id = organizer_id
-- WHERE link = '6nnqe248p6k6nnqe248p6k'
-- GROUP BY polls.id, options.id, users.id;

-- SELECT users.name AS name, users.email AS email, options.date AS choice, users.id AS attendeeID
-- FROM choices
-- JOIN polls ON polls.id = poll_id
-- JOIN users ON users.id = choices.attendee_id
-- JOIN options ON options.id = choices.option_id
-- WHERE link = '6nnqe248p6k6nnqe248p6k';





/*
SELECT users.name, users.
JOIN users ON users.id = organizer_id
JOIN options ON options.id = poll_id */