import { db } from "../connect.js";

export const register = (req, res) => {
  const q = "SELECT FROM users WHERE username =?";
  db.query(q, [req.body.username]);
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
