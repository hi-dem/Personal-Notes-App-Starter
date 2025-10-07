import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/local-data";

// Fungsi bantu strip tag HTML dari preview body
function stripHtml(html) {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

function NoteCard({ id, title, createdAt, body }) {
  const previewText = stripHtml(body);
  return (
    <div className="note-card">
      <Link to={`/notes/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p className="date">{showFormattedDate(createdAt)}</p>
      <p className="body">
        {previewText.length > 100 ? previewText.slice(0, 100) + "..." : previewText}
      </p>
    </div>
  );
}

NoteCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteCard;