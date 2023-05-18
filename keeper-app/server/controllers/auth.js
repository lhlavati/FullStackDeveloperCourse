import { db } from "../db.js";
import bcrypt from "bcrypt";

export const register = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

//   db.query(q, [req.body.email, req.body.username], (err, data) => {
//     if (err) return res.json(err);
//     if (data.length) return res.status(409).json("User already exists!");

//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(req.body.password, salt);

//     const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
//     const values = [req.body.username, req.body.email, hash];

//     db.query(q, [values], (err, data) => {
//       if (err) return res.json(err);
//       return res.status(200).json("User has been created");
//     });
//   });

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("User already exists!");

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)"
                const values = [
                    req.body.username,
                    req.body.email,
                    hash,
                ]
                console.log(values);
                db.query(q, [values], (err, data) => {
                    if(err) return res.json(err);
                    return res.status(200).json("User has been created!")
                });
            });
        });
    });

};

export const login = (req, res) => {};

export const logout = (req, res) => {};
