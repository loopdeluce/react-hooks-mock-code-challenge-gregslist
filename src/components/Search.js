import React, {useState} from "react";

function Search({onSearchSubmit, checked, onSort}) {
  const [dynamicSearch, setDynamicSearch] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit(dynamicSearch)
  }

  return (
  <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={dynamicSearch}
        onChange={(e) => setDynamicSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
      <label>Sort by Location
        <input
          type="checkbox"
          id="checkbox"
          checked={checked}
          onChange={onSort}
        />
      </label>
    </form>
  );
}

export default Search;
