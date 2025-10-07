import React from "react";
import PropTypes from "prop-types";

function SearchBar({ keyword, onKeywordChange }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Cari berdasarkan judul ..."
      value={keyword}
      onChange={(e) => onKeywordChange(e.target.value)}
      aria-label="Cari catatan"
    />
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  onKeywordChange: PropTypes.func.isRequired,
};

export default SearchBar;