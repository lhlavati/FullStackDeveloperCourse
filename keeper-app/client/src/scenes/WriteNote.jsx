import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const WriteNote = () => {
  const [value, setValue] = useState('');

  console.log(value);

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
        <div className="buttons">
          <button>Save</button>
        </div>
      </div>
    </div>
  )
}

export default WriteNote