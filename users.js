import { create } from "node:domain";
import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "users.json";

export async function getUsers() {
  const usersJSON = await fs.readFile(fileName, "utf-8");
  const users = JSON.parse(usersJSON);
  return users;
}

export async function getUserByID(id) {
  const users = await getUsers();
  const user = users.find((user) => user.id === id);
  return user;
}

export async function createUser(newUsers) {
  const users = await getUsers();
  const user = {
    id: uuidv4(),
    ...newUsers,
  };
  users.push(user);
  await fs.writeFile(fileName, JSON.stringify(users));
  return user;
}

export async function updateUserByID(id, updatedUser) {
  // userToEdit is an object with id, first_name, last_name, email, catchphrase
  // i then want to update the userToEdit object with the new key value pairs only if there is a new key value pair if the new key value pair is blank keep the old key value pair value.
  const users = await getUsers();
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex >= 0) {
    const userToEdit = users[userIndex];
    const updatedFields = {
      id: userToEdit.id,
      ...userToEdit,
      ...updatedUser,
    };
    users[userIndex] = updatedFields;

    const json = JSON.stringify(users);
    await fs.writeFile(fileName, json, "utf-8");

    return users[userIndex];
  } else {
    return null;
  }
}

export async function deleteUserByID(id) {
  const users = await getUsers();
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex >= 0) {
    const [userRemoved] = users.splice(userIndex, 1);

    const json = JSON.stringify(users);
    await fs.writeFile(fileName, json, "utf-8");

    return userRemoved;
  }
}
