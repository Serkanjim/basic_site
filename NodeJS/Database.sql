CREATE DATABASE test_database;

CREATE TABLE users(
user_id SERIAL PRIMARY KEY,
user_name VARCHAR(255),
user_email VARCHAR(255),
user_password VARCHAR(255),
);