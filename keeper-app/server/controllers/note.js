import { db } from "../db.js";

export const getNotes = (req, res) => {
  const q = "SELECT * FROM notes WHERE userID = ?";

  db.query(q, [req.query.userID],(err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });

};

export const getNote = (req, res) => {
  const q = "SELECT p.id, `title`, `note` FROM users u JOIN notes p ON u.id = p.userID WHERE p.id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addNote = (req, res) => {
  const q = "INSERT INTO notes(`title`, `note`, `userID`) VALUSE (?)"

  const values = [
    req.body.title,
    req.body.note,
    req.body.userID
  ]

  db.query(q, [values], (err,data) => {
    if (err) return res.status(500).json(err);
    return res.json("Post has been created.")
  })
};

export const deleteNote = (req, res) => {
  const q = "DELETE FROM notes WHERE id = ?"

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json("Post deleted.")
  })
};

export const updateNote = (req, res) => {
  const q = "UPDATE notes SET `title`=?, `note`=? WHERE `id` = ?"

  const noteId = req.params.id
  const values = [
    req.body.title,
    req.body.note,
    req.body.userID
  ]

  db.query(q, [...values, noteId], (err,data) => {
    if (err) return res.status(500).json(err);
    return res.json("Post has been created.")
  })
};
