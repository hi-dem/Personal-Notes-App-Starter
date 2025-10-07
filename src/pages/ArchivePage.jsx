import React, { useEffect, useState } from "react";
import { getAllNotes, deleteNote, unarchiveNote, showFormattedDate } from "../utils/local-data";

function ArchivePage() {
  const [archivedNotes, setArchivedNotes] = useState([]);

  useEffect(() => {
    setArchivedNotes(getAllNotes().filter((note) => note.archived));
  }, []);

  const handleDelete = (id) => {
    deleteNote(id);
    setArchivedNotes(getAllNotes().filter((note) => note.archived));
  };

  const handleUnarchive = (id) => {
    unarchiveNote(id);
    setArchivedNotes(getAllNotes().filter((note) => note.archived));
  };

  return (
    <main>
      <h2>Catatan Arsip</h2>
      {archivedNotes.length === 0 ? (
        <p className="empty-message">Arsip kosong</p>
      ) : (
        <div className="note-list">
          {archivedNotes.map((note) => (
            <div className="note-card" key={note.id}>
              <h2>{note.title}</h2>
              <p className="date">{showFormattedDate(note.createdAt)}</p>
              <p className="body">{note.body}</p>
              <div className="note-detail-actions">
                <button className="archive-button" onClick={() => handleUnarchive(note.id)}>
                  Batal Arsip
                </button>
                <button className="delete-button" onClick={() => handleDelete(note.id)}>
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default ArchivePage;