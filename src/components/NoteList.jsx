import React from "react";
import NoteCard from "./NoteCard";
import PropTypes from "prop-types";

function NoteList({ notes, emptyMessage = "Tidak ada catatan" }) {
  if (notes.length === 0) {
    return <p className="empty-message">{emptyMessage}</p>;
  }
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteCard key={note.id} {...note} />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  emptyMessage: PropTypes.string,
};

export default NoteList;