CREATE DATABASE mikeisms_db;
USE mikeisms_db;

CREATE TABLE mikeisms
(
    id int NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
    name varchar
    (255) NOT NULL,
    understood BOOLEAN DEFAULT false
);