CREATE TABLE IF NOT EXISTS reservaciones
(
	id int not null auto_increment ,
    ID_usuario int not null,
    ID_mesa int not null,
    fecha time,
	cantidad int not null,
    PRIMARY KEY(id),
    FOREIGN KEY(ID_usuario) REFERENCES usuarios(ID_usuario)
);