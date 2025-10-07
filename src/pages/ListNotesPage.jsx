import React, { useState, useEffect } from "react";
import { getAllNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import AddButton from "../components/AddButton";
import { useSearchParams } from "react-router-dom";

function ListNotesPage() {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  useEffect(() => {
    setNotes(getAllNotes().filter((note) => !note.archived));
  }, []);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const onKeywordChange = (newKeyword) => {
    setSearchParams({ keyword: newKeyword });
  };

  return (
    <main>
      <h2>Catatan Aktif</h2>
      <SearchBar keyword={keyword} onKeywordChange={onKeywordChange} />
      <NoteList notes={filteredNotes} />
      <AddButton />
    </main>
  );
}

export default ListNotesPage;