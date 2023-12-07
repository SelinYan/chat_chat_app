import { response } from "express";
import { db } from "../connect.js";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  const q = "SELECT * FROM users WHERE username =?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).send(err);
    if (data.length) return res.status(409).json("User already exists");
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
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found");

    const checkPassword = bycrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkPassword)
      return response.status(400).json("Wrong password or usernames");

    const token = jwt.sign({ id: data[0].id }, "secretkey");
    const { password, ...others } = data[0];
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been logged out");
};
