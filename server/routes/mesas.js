const express = require("express");
const router = express.Router();
const mysqlConn = require("../database");

router.get("/", (req, res) => {
    mysqlConn.query("SELECT * FROM mesas", (err, rows, fields) => {
      if (!err) res.json(rows);
      else console.log(err);
    });
  });
  
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const query = "SELECT * FROM mesas WHERE id = ?";
    mysqlConn.query(query, [id], (err, rows, fields) => {
      if (!err) res.json(rows);
      else console.log(err);
    });
  });
  
router.post("/add", (req, res) => {
    const { total, disponibles } = req.body;
    console.log(total, disponibles);
    for (let i = 2; i <= 120; i++) {
      const query = "INSERT INTO mesas (total, disponibles) VALUES (?, ?)";
      mysqlConn.query(query, [total, disponibles], (err, rows, fields) => {
        if (!err) console.log("Mesa agregada");
        else console.log(err);
      });
    }
  });
  
  router.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    mysqlConn.query("DELETE FROM mesas WHERE id = ?;", [id], (err, rows, fields) => {
        if(!err) res.json({ Status: `Se ha eliminado la mesa ${id}` });
        else console.log(err);
    })
  })

module.exports = router;