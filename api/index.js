import express from "express";
import fs from "fs";

const users = JSON.parse(fs.readFileSync("./MOCK_DATA.json", "utf8"));
// console.log(users);

const app = express(); // express app

const PORT = 8000;

app.use(express.urlencoded({ extended: false }));



app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((user) => `<li>${user.first_name}</li>`)}
  </ul>
  `;
  res.send(html);
});

//to get all the user data...
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => user.id === id);

  return res.json(user);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  console.log("body", body);
  return res.json({ status: "pending" });
});

app.get("/api/users/1", (req, res) => {
  const user = users.find((user) => user.id === 1);
  res.json(user);
});

app.get("/api/users/90", (req, res) => {
  const user = users.find((user) => user.id === 90);
  res.json(user);
});
app.patch("/api/users/:id", (req, res) => {
  return res.json({ status: "pending" });
});
app.delete("/api/users/:id", (req, res) => {
  return res.json({ status: "pending" });
});

//to get specific id data
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
