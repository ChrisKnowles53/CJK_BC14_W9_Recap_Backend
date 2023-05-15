import express from "express";
import {
  getUsers,
  getUserByID,
  createUser,
  updateUserByID,
  deleteUserByID,
} from "./users.js";

const app = express();
const port = 3001;

app.use(express.json());

app.get("/api/users", async function (req, res) {
  res.json(await getUsers());
});

app.get("/api/users/:id", async function (req, res) {
  const user = await getUserByID(req.params.id);
  const response = {
    success: true,
    payload: user,
  };
  if (user) {
    return res.json(response);
  } else {
    res
      .status(404)
      .send({ error: `Id: ${req.params.id} not found in database.` });
  }
});

app.post("/api/users", async function (req, res) {
  const newUsers = req.body;
  const addedUsers = await createUser(newUsers);
  res.json(addedUsers);
});

app.patch("/api/users/:id", async function (req, res) {
  const updatedUser = await updateUserByID(req.params.id, req.body);
  res.json(updatedUser);
});

app.delete("/api/users/:id", async function (req, res) {
  const deletedUser = await deleteUserByID(req.params.id);
  res.json(deletedUser);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
