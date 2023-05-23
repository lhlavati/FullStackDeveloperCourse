import React, { useContext, useEffect } from "react";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext.js";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/notes", {
          params: { userID: currentUser.id },
        });
        setNotes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [currentUser]);

  const handleDelete = async (note) => {
    try {
      await axios.delete(`http://localhost:8800/api/notes/${note}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="home">
      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note" key={note.id}>
              <div className="card">
                <h3>{note.title}</h3>
                <p>{note.note}</p>
                <Link to={`/write-note/${note.id}`}>
                  <img src={Edit} alt="edit" />
                </Link>
                <Link>
                  <img onClick={(e) => handleDelete(note.id, e)} src={Delete} alt="delete" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
