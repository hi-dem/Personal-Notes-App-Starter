import React from "react";
import { useNavigate } from "react-router-dom";

function AddButton() {
  const navigate = useNavigate();
  return (
    <button className="add-button" aria-label="Tambah catatan" onClick={() => navigate("/notes/new")}>
      +
    </button>
  );
}

export default AddButton;