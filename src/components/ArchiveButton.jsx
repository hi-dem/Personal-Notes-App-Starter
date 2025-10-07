import React from "react";
import PropTypes from "prop-types";

function ArchiveButton({ isArchived, onClick }) {
  return (
    <button className="archive-button" onClick={onClick}>
      {isArchived ? "Batal Arsip" : "Arsipkan"}
    </button>
  );
}

ArchiveButton.propTypes = {
  isArchived: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ArchiveButton;