DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS projects;

-- CREATE TABLES

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    project_id integer REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
    title character varying(255) NOT NULL,
    completed boolean NOT NULL DEFAULT false
);

-- DATA

INSERT INTO projects (id, name) VALUES (1, 'Lotide');
INSERT INTO projects (id, name) VALUES (2, 'TinyApp');
INSERT INTO projects (id, name) VALUES (3, 'Tweeter');
INSERT INTO projects (id, name) VALUES (4, 'Midterm');

INSERT INTO tasks (id, project_id, title, completed) VALUES (1, 1, 'Implement countLetters', true);
INSERT INTO tasks (id, project_id, title, completed) VALUES (2, 1, 'Implement findKeyByValue', true);
INSERT INTO tasks (id, project_id, title, completed) VALUES (3, 1, 'Implement assertObjectsEqual', true);
INSERT INTO tasks (id, project_id, title, completed) VALUES (4, 1, 'Implement takeUntil', true);
INSERT INTO tasks (id, project_id, title, completed) VALUES (5, 1, 'Implement findKey', true);
INSERT INTO tasks (id, project_id, title, completed) VALUES (6, 1, 'Submit Lotide', false);
INSERT INTO tasks (id, project_id, title, completed) VALUES (7, 2, 'TinyApp & Express setup', true);
INSERT INTO tasks (id, project_id, title, completed) VALUES (8, 2, 'URL Shortening', false);
INSERT INTO tasks (id, project_id, title, completed) VALUES (9, 2, 'Cookies in Express', false);
INSERT INTO tasks (id, project_id, title, completed) VALUES (10, 2, 'Add User Specific Features', false);
INSERT INTO tasks (id, project_id, title, completed) VALUES (11, 2, 'Add in method override [stretch]', false);
INSERT INTO tasks (id, project_id, title, completed) VALUES (12, 2, 'Submit TinyApp', false);
INSERT INTO tasks (id, project_id, title, completed) VALUES (13, 3, 'Positioning the Nav', true);
INSERT INTO tasks (id, project_id, title, completed) VALUES (14, 3, 'Setup Main Container', true);
INSERT INTO tasks (id, project_id, title, completed) VALUES (15, 3, 'Implement the Character Counter', true);
INSERT INTO tasks (id, project_id, title, completed) VALUES (16, 3, 'Creating Tweets', false);
INSERT INTO tasks (id, project_id, title, completed) VALUES (17, 3, 'Dynamic Tweets', false);
INSERT INTO tasks (id, project_id, title, completed) VALUES (18, 3, 'Form Submission using AJAX', false);
INSERT INTO tasks (id, project_id, title, completed) VALUES (19, 3, 'Fetching Tweets using AJAX', false);
INSERT INTO tasks (id, project_id, title, completed) VALUES (20, 3, 'Display validation errors with jQuery', false);
INSERT INTO tasks (id, project_id, title, completed) VALUES (21, 3, 'Submit Tweeter Project', false);
INSERT INTO tasks (id, project_id, title, completed) VALUES (22, 4, 'Plan midterm project', false);
INSERT INTO tasks (id, project_id, title, completed) VALUES (23, 4, 'Decide on front-end framework', false);

-- Fix Sequence
SELECT pg_catalog.setval('public.projects_id_seq', 4, true);
SELECT pg_catalog.setval('public.tasks_id_seq', 23, true);
