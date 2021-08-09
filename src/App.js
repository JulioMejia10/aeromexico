import React, { Suspense, lazy, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import '../src/app.scss';
import '../src/querys.scss';
import Header from '../src/components/Header';
import TabFloat from '../src/components/TabFloat';
import DataInitial from '../src/helpers/DataInitial';
import { FavoriteContact } from './containers/FavoriteContainer';
/* const Home = lazy(() => import('../src/components/Home')); */
const Staff = lazy(() => import('../src/components/Staff'));
const Compañeros = lazy(() => import('../src/components/Compañeros'));

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
    fetch("http://localhost:3004/amigos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(info)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result, 'result');
      });
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <section className="container">
          <div className="card-container">
            <Switch>
              <Route exact path="/">
                <Suspense fallback={<div>Loading...</div>}>
                  {/* <Home handleSaveContact={handleSaveContact} handleClose={handleClose} modal={ModalAdd} students={students} /> */}
                  <FavoriteContact handleSaveContact={handleSaveContact} handleClose={handleClose} modal={ModalAdd} students={students} />
                </Suspense>
              </Route>
              <Route exact path="/staff">
                <Suspense fallback={<div>Loading...</div>}>
                  <Staff students={staff} />
                </Suspense>
              </Route>
              <Route exact path="/compañeros">
                <Suspense fallback={<div>Loading...</div>}>
                  <Compañeros students={compañeros} />
                </Suspense>
              </Route>
            </Switch>
          </div>
        </section>
        <TabFloat fav={ModalFav} handleClose={handleClose} handleClick={handleClick} />
      </div>
    </Router>
  );
}

export default DataInitial(App);
