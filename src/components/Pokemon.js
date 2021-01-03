import { connect } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import reqMakerForPokemon from '../helpers/requestMakerForPokemon';
import SecondNavBar from './secondNavbar';
import Footer from './Footer';

function mapStateToProps(state) {
  const {
    url, isLoading,
  } = state.FetchPokemonDetailsReducer;

  return {
    url, isLoading,
  };
}

const mapDispatchToProps = dispatch => ({
  reqMakerForPokemon: url => dispatch(reqMakerForPokemon(url)),
});

const Pokemon = props => {
  let renderedComponent;
  let i;
  useEffect(() => {
    const { reqMakerForPokemon, location } = props;
    reqMakerForPokemon(location.pathname.slice(1));
  }, []);
  const { isLoading, url } = props;
  if (isLoading || !url) {
    renderedComponent = (<div>Loading</div>);
  } else {
    renderedComponent = (
      <div className="d-flex justify-content-center mt-5">
        <div className="card col-lg-4 col-7 rounded shadow-lg bg-white pb-4">
          <img src={url.sprites.front_default} alt="selected-pokemon" className="card-img-top" />
          <div className="font-weight-bold">
            Name:
            {url.forms[0].name}
          </div>
          <div className="font-weight-bold">
            Base experience:
            {url.base_experience}
          </div>
          <div className="font-weight-bold">
            Height:
            {url.height}
          </div>
          <div className="font-weight-bold">
            Weight:
            {url.weight}
          </div>
          <div className="font-weight-bold">
            Abilities:
            {url.abilities.map(element => {
              i += 1;
              return (
                <span key={i}>
                  {element.ability.name}
                  {' '}
                </span>
              );
            })}
          </div>
        </div>
      </div>

    );
  }
  return (
    <div>
      <SecondNavBar />
      {renderedComponent}
      <Footer />
    </div>
  );
};

Pokemon.propTypes = {
  reqMakerForPokemon: PropTypes.func.isRequired,
  location: PropTypes.instanceOf(Object),
  url: PropTypes.instanceOf(Object),
  isLoading: PropTypes.bool,
};

Pokemon.defaultProps = {
  location: {},
  url: {},
  isLoading: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
