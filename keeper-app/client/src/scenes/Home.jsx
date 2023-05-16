import React from 'react'
import Edit from '../assets/edit.png'
import Delete from '../assets/delete.png'
import { Link } from 'react-router-dom'

const Home = () => {
  const notes = [
    {
      id: 1,
      title: "Smeće",
      note: "Izbaci smeće večeras",
      userID: 1
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      note: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt voluptatum amet pariatur animi. Aspernatur natus illum veritatis commodi harum eos.",
      userID: 1
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      note: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt voluptatum amet pariatur animi. Aspernatur natus illum veritatis commodi harum eos.",
      userID: 1
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      note: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt voluptatum amet pariatur animi. Aspernatur natus illum veritatis commodi harum eos.",
      userID: 1
    },
  ]
  return (
    <div className="home">
      <div className="notes">
        {notes.map((note) => (
          <div className="note" key={note.id}>
            <div className="card">
              <h3>{note.title}</h3>
              <p>{note.note}</p>
              <Link to={`/write-note/${note.id}`}>
                <img src={Edit} alt="edit" />
              </Link>
              <Link>
                <img src={Delete} alt="delete" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home