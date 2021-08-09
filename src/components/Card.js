import React from 'react';
import { FiBookmark } from "react-icons/fi";

function Card({ students = [], handleSave }) {


  const handleClick = (name) => {
    handleSave(name);
  }

  return (
    <>
      {students.map((item, idx) => {
        return (
          <div key={idx} className="card">
            <div className={`img-container ${item.house}`}>
              <img alt="" src={item.image} />
            </div>
            <div className="content-card">
              <div className="first">
                <span>{item.name}</span>
                <p className="info">Cumple años: {item.dateOfBirth}</p>
                <p className="info">Genero: {item.gender}</p>
                <p className="info">Color de ojos: {item.eyeColour}</p>
                <p className="info">Color de pelo: {item.hairColour}</p>
              </div>
              <div className="container-info">
                <div>
                  <span>{item.alive ? 'vivo' : ''}</span>
                  <span>{item.hogwartsStudent ? 'estudiante' : 'Staff'}</span>
                </div>
                <div onClick={() => handleClick(item.name)}><FiBookmark className={item.colorIcon} /></div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
export default Card;
