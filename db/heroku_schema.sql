USE `ufmoqmlxcz4sgl2o`;

CREATE TABLE burgers (
	id INTEGER NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	devoured BOOLEAN DEFAULT FALSE,
  	burger_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
);

SELECT * FROM burgers;