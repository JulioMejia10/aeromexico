import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import '../src/app.scss';
import '../src/querys.scss';
import Header from '../src/components/Header';
import DataInitial from '../src/helpers/DataInitial';
import { FavoriteContact } from './containers/FavoriteContainer';
import { FavoriteFloat } from './containers/FavoriteContainer';
import { FavoriteStaff } from './containers/FavoriteContainer';
import { FavoriteCompañeros } from './containers/FavoriteContainer';
import { saveContact } from './helpers/petitions';

function App({ students, staff, compañeros }) {
  const [ModalAdd, setModalAdd] = useState(false);
  const [ModalFav, setModalFav] = useState(false);

  const handleClick = (action, value) => {
    if (action === 'Agregar') {
      setModalAdd(true)
    } else {
      setModalFav(value)
    }
  }

  const handleClose = (action) => {
    if (action === 'close') {
      setModalAdd(false)
    } else {
      setModalFav(false)
    }
  }

  const handleSaveContact = (info) => {
    saveContact(info);
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <section className="container">
          <div className="card-container">
            <Switch>
              <Route exact path="/">
                <FavoriteContact
                  handleSaveContact={handleSaveContact}
                  handleClose={handleClose}
                  modal={ModalAdd}
                  students={students}
                />
              </Route>
              <Route exact path="/staff">
                <FavoriteStaff
                  handleSaveContact={handleSaveContact}
                  handleClose={handleClose}
                  modal={ModalAdd}
                  students={staff}
                />
              </Route>
              <Route exact path="/compañeros">
                <FavoriteCompañeros
                  handleSaveContact={handleSaveContact}
                  handleClose={handleClose}
                  modal={ModalAdd}
                  students={compañeros}
                />
              </Route>
            </Switch>
          </div>
        </section>
        <FavoriteFloat
          fav={ModalFav}
          handleClose={handleClose}
          handleClick={handleClick}
        />
      </div>
    </Router>
  );
}

export default DataInitial(App);
