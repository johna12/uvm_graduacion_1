CREATE TABLE IF NOT EXISTS usuarios
(
	ID_usuario int not null auto_increment ,
    Nombres varchar(30),
	Apellidos varchar(30),
    Username varchar(20) NOT NULL,
    Password varchar(100) NOT NULL,
    PRIMARY KEY(ID_usuario)
);