import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";

function AddNotePage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const bodyRef = useRef(null);
  const navigate = useNavigate();

  const handleInput = (e) => {
    setBody(e.target.innerHTML);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      addNote({ title, body });
      navigate("/");
    }
  };

  return (
    <main>
      <h2>Tambah Catatan</h2>
      <form className="add-note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Judul catatan"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          maxLength={60}
        />
        <div
          className="add-note-body-input"
          data-placeholder="Isi catatan..."
          contentEditable
          ref={bodyRef}
          onInput={handleInput}
          style={{
            minHeight: "100px",
            border: "1px solid #ccc",
            padding: "8px",
            marginBottom: "12px",
            borderRadius: "4px",
            background: "#222",
            color: "#fff"
          }}
        />
        <button type="submit">Simpan</button>
      </form>
    </main>
  );
}

export default AddNotePage;