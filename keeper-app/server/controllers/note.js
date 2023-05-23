import { db } from "../db.js";

export const getNotes = (req, res) => {
  const q = "SELECT * FROM notes WHERE userID = ?";

  db.query(q, [req.query.userID],(err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });

};

export const getNote = (req, res) => {
  res.json("from controller");
};

export const addNote = (req, res) => {
  res.json("from controller");
};

export const deleteNote = (req, res) => {
  const q = "DELETE FROM notes WHERE id = ?"

  db.query(q, [req.query.id], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json("Post deleted.")
  })
};

export const updateNote = (req, res) => {
  res.json("from controller");
};
