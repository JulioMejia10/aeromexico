import { connect } from 'react-redux';
import Home from '../components/Home';
import Staff from '../components/Staff';
import Compañeros from '../components/Compañeros';
import TabFloat from '../components/TabFloat';
import { saveFav } from '../actions';

const mapStateToProps = state => {
  return {
    favorites: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveFavorite: (payload) => dispatch(saveFav(payload))
  };
};

export const FavoriteContact = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export const FavoriteFloat = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabFloat);

export const FavoriteStaff = connect(
  mapStateToProps,
  mapDispatchToProps
)(Staff);

export const FavoriteCompañeros = connect(
  mapStateToProps,
  mapDispatchToProps
)(Compañeros);


