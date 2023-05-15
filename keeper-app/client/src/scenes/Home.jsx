import React from 'react'
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
    {
      id: 5,
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
              <Link className="link" to={`/note/${note.id}`}>
                <h3>{note.title}</h3>
              </Link>
              <p>{note.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home