const express = require("express");
const app = express();
const PORT = 8083;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("GET Request Called");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/Cat", (req, res) => {
  res.status(200).send({
    Cat: "🐱",
    color: "Orange",
  });
});

app.post("/Cat/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    res.status(418).send({ message: "We need a name!" });
  }
  res.status(200).send({
    Cat: `🐱 ${name} and ID number ${id}`,
  });
});
app.get("/Cat/:id", (req, res) => {
  res.status(200).send({
    Cat: `🐱 name is ${req.body.name}`,
  });
});
