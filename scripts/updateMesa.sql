
DELIMITER $$
CREATE PROCEDURE updateMesa
(
    IN _id int,
    IN _cantidad int
)
BEGIN
        UPDATE `graduacion`.`mesas` SET `disponibles` = `disponibles`-_cantidad WHERE `id` = _id;
END; 
END$$

CALL `graduacion`.`updateMesa`(120, 9);
