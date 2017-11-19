DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
	id INTEGER(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN NOT NULL,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

