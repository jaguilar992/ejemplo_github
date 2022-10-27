const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static("public"));

app.get("/saludo", (req, res) => {
  res.send("Hola");
});

app.get("/random", (req, res) => {
  res.send({n: 1 + Math.floor(Math.random()*10)});
})

app.listen(PORT, () => {
  console.log(
    `PID: ${process.pid}. Servidor express escuchando en puerto ${PORT}`
  );
});


