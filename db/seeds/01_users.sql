DELETE FROM users;
DELETE FROM polls;
DELETE FROM options;
DELETE FROM choices;


-- Users table seeds
INSERT INTO users (id, name, email)
VALUES (1, 'Alice', 'alicemurphy@gmail.com');

INSERT INTO users (id, name, email)
VALUES (2, 'Kira', 'kiradon@gmail.com');

INSERT INTO users (id, name, email)
VALUES (3, 'Bradley', 'bradbrad@gmail.com');

INSERT INTO users (id, name, email)
VALUES (4, 'Rod', 'iliketoparty@gmail.com');

INSERT INTO users (id, name, email)
VALUES (5, 'Denise', 'youlookshitty@gmail.com');

-- Polls table seeds
INSERT INTO polls (id, title, description, location, organizer_id)
VALUES (1, 'Birthday BONANZA', 'description', 'Basement', 1);

INSERT INTO polls (id, title, description, location, organizer_id)
VALUES (2, 'Offical Work Meeting', 'description', 'Mcdonalds', 2);

INSERT INTO polls (id, title, description, location, organizer_id)
VALUES (3, 'Badminton Practice', 'description', 'The gym, duh', 3);

INSERT INTO polls (id, title, description, location, organizer_id)
VALUES (4, 'Schoodle Opening Day', 'description', 'World Wide', 4);

INSERT INTO polls (id, title, description, location, organizer_id)
VALUES (5, 'Group Midterm Project', 'description', 'Lighthouse Labs', 5);

-- Options table seeds
INSERT INTO options (id, date, poll_id)
VALUES (1, '2019-11-16', 1);
INSERT INTO options (id, date, poll_id)
VALUES (2, '2019-11-17', 1);
INSERT INTO options (id, date, poll_id)
VALUES (3, '2019-11-18', 1);

INSERT INTO options (id, date, poll_id)
VALUES (4, '2019-11-11', 2);
INSERT INTO options (id, date, poll_id)
VALUES (5, '2019-11-12', 2);
INSERT INTO options (id, date, poll_id)
VALUES (6, '2019-11-13', 2);

INSERT INTO options (id, date, poll_id)
VALUES (7, '2019-11-13', 3);
INSERT INTO options (id, date, poll_id)
VALUES (8, '2019-11-14', 3);
INSERT INTO options (id, date, poll_id)
VALUES (9, '2019-11-15', 3);

INSERT INTO options (id, date, poll_id)
VALUES (10, '2019-11-20', 4);
INSERT INTO options (id, date, poll_id)
VALUES (11, '2019-11-21', 4);
INSERT INTO options (id, date, poll_id)
VALUES (12, '2019-11-22', 4);

INSERT INTO options (id, date, poll_id)
VALUES (13, '2019-11-23', 5);
INSERT INTO options (id, date, poll_id)
VALUES (14, '2019-11-24', 5);
INSERT INTO options (id, date, poll_id)
VALUES (15, '2019-11-25', 5);

-- Choices table seeds
INSERT INTO choices (id, option_id, attendee_id, poll_id)
VALUES (1, 1, 2, 1);
INSERT INTO choices (id, option_id, attendee_id, poll_id)
VALUES (2, 2, 2, 1);
INSERT INTO choices (id, option_id, attendee_id, poll_id)
VALUES (3, 1, 1, 1);
INSERT INTO choices (id, option_id, attendee_id, poll_id)
VALUES (4, 2, 1, 1);

INSERT INTO choices (id, option_id, attendee_id, poll_id)
VALUES (5, 1, 2, 2);
INSERT INTO choices (id, option_id, attendee_id, poll_id)
VALUES (6, 1, 1, 2);
INSERT INTO choices (id, option_id, attendee_id, poll_id)
VALUES (7, 2, 3, 2);

INSERT INTO choices (id, option_id, attendee_id, poll_id)
VALUES (8, 1, 2, 3);
INSERT INTO choices (id, option_id, attendee_id, poll_id)
VALUES (9, 2, 1, 3);
INSERT INTO choices (id, option_id, attendee_id, poll_id)
VALUES (10, 2, 3, 3);

INSERT INTO choices (id, option_id, attendee_id, poll_id)
VALUES (11, 1, 2, 4);
INSERT INTO choices (id, option_id, attendee_id, poll_id)
VALUES (12, 1, 1, 4);
INSERT INTO choices (id, option_id, attendee_id, poll_id)
VALUES (13, 2, 3, 4);

INSERT INTO choices (id, option_id, attendee_id, poll_id)
VALUES (14, 1, 2, 5);
INSERT INTO choices (id, option_id, attendee_id, poll_id)
VALUES (15, 1, 1, 5);
INSERT INTO choices (id, option_id, attendee_id, poll_id)
VALUES (16, 1, 3, 5);






















