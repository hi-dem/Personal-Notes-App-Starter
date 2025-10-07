import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNote, deleteNote, archiveNote, unarchiveNote, showFormattedDate } from "../utils/local-data";
import ArchiveButton from "../components/ArchiveButton";
import DeleteButton from "../components/DeleteButton";

function NoteDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);

  useEffect(() => {
    setNote(getNote(id));
  }, [id]);

  if (!note) {
    return <p>Catatan tidak ditemukan.</p>;
  }

  const handleDelete = () => {
    deleteNote(id);
    navigate("/");
  };

  const handleArchive = () => {
    if (note.archived) {
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
    navigate("/");
  };

  return (
    <main>
      <h2>{note.title}</h2>
      <p className="date">{showFormattedDate(note.createdAt)}</p>
      <div className="body" dangerouslySetInnerHTML={{ __html: note.body }} />
      <div className="note-detail-actions">
        <ArchiveButton isArchived={note.archived} onClick={handleArchive} />
        <DeleteButton onClick={handleDelete} />
      </div>
    </main>
  );
}

export default NoteDetailPage;