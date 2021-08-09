import React from 'react';
import { FiBookmark, FiUserPlus, FiTrash2 } from "react-icons/fi";

export default function TabFloat({ handleClick, fav, favorites }) {
  const handleClicked = (event) => {
    if (event.target.innerText === 'Agregar') {
      handleClick(event.target.innerText, null);
    } else {
      handleClick(event.target.innerText, !fav);
    }
  }

  const justFiveItems = favorites.slice(0, 5);

  const favoriteShow = justFiveItems.map((item, idx) => {
    return <li key={idx}>
      {item.name} <span><FiTrash2 /></span>
    </li>
  })

  return (
    <>
      <div className="float-container">
        <div className="tab" onClick={handleClicked}>
          <span>Favoritos</span>
          <FiBookmark />
        </div>
        <div className="tab" onClick={handleClicked} >
          <span>Agregar</span>
          <FiUserPlus />
        </div>
      </div>
      <div className={`fav-container ${fav ? 'appear-fav' : ''}`}>
        <ul>
          {favoriteShow}
        </ul>
      </div>
    </>
  )
}
