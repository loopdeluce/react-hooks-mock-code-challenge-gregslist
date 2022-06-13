import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteItem }) {
const listingsElements = listings.map(listing => {
  return (
    <ListingCard 
      key={listing.id}  
      description={listing.description}
      image={listing.image}
      location={listing.location}
      id={listing.id}
      onDeleteItem={onDeleteItem}
    />
  )})
  return (
    <main>
      <ul className="cards">
        {listingsElements}
      </ul>
    </main>
  );
}

export default ListingsContainer;
