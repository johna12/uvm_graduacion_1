CREATE DATABASE IF NOT EXISTS graduacion;

use graduacion;

CREATE TABLE IF NOT EXISTS mesas
(
	id int not null auto_increment,
    total int not null,
    disponibles int not null,
    PRIMARY KEY (id)
);