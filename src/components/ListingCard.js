import React, {useState} from "react";

function ListingCard({description, location, image, id, onDeleteItem}) {
  const [favoriteItem, setFavoriteItem] = useState(false);

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
    method: 'DELETE'
    })
  onDeleteItem(id)
  }

  function handleFavorite() {
    setFavoriteItem((favoriteItem) => !favoriteItem);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favoriteItem ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
