import { db } from "../connect.js";
import bycrypt from "bcryptjs";

export const register = (req, res) => {
  const q = "SELECT * FROM users WHERE username =?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).send(err);
    if (data.length) return res.status(409).json("usr already exists");
    //create a new user
    //to hash the ps we need to generate salt and it will get us ecrypted ps
    const salt = bycrypt.genSaltSync(10);
    const hashedPassword = bycrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users( username,email,password,name) VALUES (?)";

    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created succesefully");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db;
};

export const logout = (req, res) => {};
