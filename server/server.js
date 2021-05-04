const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");

app.set("port", process.env.port || 4000);

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

// Rutas
app.use(require("./routes/login"));
app.use("/mesas", require("./routes/mesas"));
app.use("/reservaciones", require("./routes/reservaciones"));

app.listen(app.get("port"), () => {
  console.log(`Servidor ejecutandose en el puerto ${app.get("port")}`);
});

