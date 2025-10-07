import React from "react";
import PropTypes from "prop-types";

function DeleteButton({ onClick }) {
  return (
    <button className="delete-button" onClick={onClick}>
      Hapus
    </button>
  );
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;