import axios from 'axios';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation } from 'react-router-dom';


const WriteNote = () => {
  const state = useLocation().state
  const [value, setValue] = useState(state?.note || '');
  const [title, setTitle] = useState(state?.title || '');

  const handleClick = async e=>{
    e.preventDefault()
    try {
      state ? await axios.put(`/notes/${state.id}`, {title, note:value}) : await axios.post(`/notes`, {title, note:value})
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="add">
      <div className="content">
        <input type="text" value={title} placeholder="Title" onChange={e=>setTitle(e.target.value)}/>
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
        <div className="buttons">
          <button onClick={handleClick}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default WriteNote