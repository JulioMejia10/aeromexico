import React from 'react';
import HP from '../img/HP.png';
import {
  useHistory
} from "react-router-dom";


export default function Header() {
  let history = useHistory();

  const handleClick = (event) => {
    const { innerText } = event.target;
    let route = `${innerText}`;
    history.push(route);
  }

  return (
    <header>
      <div className="wrapper-btn">
        <div className="image-container">
          <img alt="" src={HP} />
          <span>Selecciona tu filtro</span>
        </div>
        <div className="btn-container">
          <div onClick={handleClick}>Compañeros</div>
          <div onClick={handleClick}>Staff</div>
        </div>
      </div>
    </header>
  )
}
