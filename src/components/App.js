import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const[listings, setListings] = useState([]);
  const[search, setSearch] = useState('');
  const[checked, setChecked] = useState(false);

  useEffect( () => {
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(listings => setListings(listings))
  }
  , []);

  function handleDelete(deleteId) {
    const alteredArray = listings.filter(listing => listing.id !== deleteId);
    setListings(alteredArray);
  };

  function handleSearchSubmit(searchValue) {
    setSearch(searchValue);
  }

  function handleNewItemSubmit(newItem){
    const newListings = [...listings, newItem];
    setListings(newListings);
  }

  function handleSort() {
    setChecked(checked => !checked)
  }

  const filteredListings = listings
    .filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))
    .sort((listing1, listing2) => {
      if (checked === true) {
        return listing1.location.localeCompare(listing2.location);
      }
      return 0;
    })

  return (
    <div className="app">
      <Header 
        onSearchSubmit={handleSearchSubmit} 
        checked={checked} 
        onSort={handleSort} 
        onSubmitNewItem={handleNewItemSubmit}/>
      <ListingsContainer listings={filteredListings} onDeleteItem={handleDelete}/>
    </div>
  );
}

export default App;
