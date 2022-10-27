const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/saludo", (req, res) => {
  res.send("Hola");
})

app.listen(PORT, () => {
  console.log(
    `PID: ${process.pid}. Servidor express escuchando en puerto ${PORT}`
  );
});


